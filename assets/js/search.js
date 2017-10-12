var jobSearcher = new function () {
    var createSearchBox = function () {        
        $('.js-jobs-list').prepend('<div class="btn-toolbar btn-toolbar-top">' +
                                        'Filter Job: <input type="text" id="search-box"></input>' +
                                        '<img class="loader-img" src ='+ chrome.extension.getURL("assets/img/loader.gif") +' />'+
                                  '</div>');
    }
    this.Init = function () {
        createSearchBox();
    }
    this.BindEvents = function(){
        $('#search-box').bind('keyup', function(e){
            if(e.keyCode == 13)
            {
                FilterJobs(this.value);
            }
        });
    }
    function FilterJobs(keyword){      
        $('.loader-img').css('visibility', 'unset');
        
        $(".table-responsive table").load(window.location.href + "?from=0&count=1000000 .table-responsive table",
        function() {            
            var table = $('.table-responsive').find('table');
            var filtered = $(table).find('a[class=job-method]:contains('+keyword+')').closest('tr');    
            $(table).find('tbody tr').remove();
            $(table).find('tbody').append(filtered);
            $('.loader-img').css('visibility', 'hidden');
          });  
    }
}
jobSearcher.Init();
jobSearcher.BindEvents();