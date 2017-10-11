var jobSearcher = new function () {
    var createSearchBox = function () {
        // alert('here!');
        $('.js-jobs-list').prepend('<div class="btn-toolbar btn-toolbar-top">' +
                                        'Filter Job: <input type="text" id="search-box"></input>' +
                                  '</div>');
    }
    this.Init = function () {
        createSearchBox();
    }
}
jobSearcher.Init();