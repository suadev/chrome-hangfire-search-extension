jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
  };

var jobSearcher = new function () {
    var totalItems = "<p>Total Items: #</p>";

    var createSearchBox = function () {        
        $('#search-box').closest('div').remove();
        $('.js-jobs-list').prepend('<div class="search-box-div">' +
                                       '<input type="text" id="search-box" placeholder="Filter by Job Name..."></input>' +
                                       '<img class="loader-img" src ='+ chrome.extension.getURL("assets/img/loader.gif") +' />'+
                                       '<p id="total-items"></p>'+
                                   '</div>');
    }
    this.Init = function () {
        createSearchBox();
    }
    this.BindEvents = function(){
        $('#search-box').bind('change', function(e){   
            if(this.value.length == 0)
                window.location.reload();
            else
                FilterJobs(this.value);            
        });
    }
    function FilterJobs(keyword){      
        $('.loader-img').css('visibility', 'unset');        
        $(".table-responsive table").load(window.location.href.split('?')[0] + "?from=0&count=1000000 .table-responsive table",
        function() {            
            var table = $('.table-responsive').find('table');
            var filtered = $(".page-header").text() == "Recurring jobs" ? $(table).find('input.js-jobs-list-checkbox[value*='+ keyword + ']').closest('tr') :  $(table).find('a[class=job-method]:contains('+ keyword +')').closest('tr');    
            $(table).find('tbody tr').remove();
            $(table).find('tbody').append(filtered);
            $('.loader-img, .btn-toolbar').css('visibility', 'hidden');
            $('#total-items').text("Total Items: " + filtered.length);
        });  
    }
}
jobSearcher.Init();
jobSearcher.BindEvents();