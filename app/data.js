taskManager.factory('menuItems', function() {
    var menuItems = {};
    menuItems.mainMenuData = [
        {itemUrl: 'create-task', itemIcon: 'addIcon', itemText: 'Add / Create'},
        {itemUrl: 'in-progress', itemIcon: 'workIcon', itemText: 'In progress'},
        {itemUrl: 'parked-out', itemIcon: 'inactiveIcon', itemText: 'Parked Out'},
        {itemUrl: 'backlog', itemIcon: 'folderIcon', itemText: 'Backlog'}
    ];
    menuItems.createItemMenu = [
        {itemUrl: 'add-task', itemText: 'Add Task'}
/*
        {itemUrl: '#', itemText: 'Item Two'},
        {itemUrl: '#', itemText: 'Item Three'}
*/
    ]
    return menuItems;
})