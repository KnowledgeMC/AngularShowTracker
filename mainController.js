angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'AngularJS Show Tracker';
    vm.searchInput = '';
    vm.shows = [
        {
            title: 'Game of Thrones',
            year: 2011,
            favorite: true
        },
        {
            title: 'Walking Dead',
            year: 2010,
            favorite: true
        },
        {
            title: 'Family Guy',
            year: 1999,
            favorite: true
        },
        {
            title: 'Westworld',
            year: 2016,
            favorite: true
        },
        {
            title: 'Breaking Bad',
            year: 2008,
            favorite: false
        }
    ];
    vm.orders = [
        {
            id: 1,
            title: 'Year Ascending',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            title: 'Year Descending',
            key: 'year',
            reverse: true
        },
        {
            id: 3,
            title: 'Title Ascending',
            key: 'title',
            reverse: false
        },
        {
            id: 4,
            title: 'Title Descending',
            key: 'title',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function() {
        vm.shows.push(vm.new);
        vm.new = {};
    };
});
