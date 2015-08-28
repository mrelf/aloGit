taskManager.factory('menuItems', function() {
    var menuItems = {};
    menuItems.mainMenuData = [
        {itemUrl: 'create-task', itemIcon: 'addIcon', itemText: 'Add / Create', hasSubmenu: 'true'},
        {itemUrl: 'in-progress', itemIcon: 'workIcon', itemText: 'In progress', hasSubmenu: 'false'},
        {itemUrl: 'parked-out', itemIcon: 'inactiveIcon', itemText: 'Parked Out', hasSubmenu: 'false'},
        {itemUrl: 'backlog', itemIcon: 'folderIcon', itemText: 'Backlog', hasSubmenu: 'false'},        
    ];
    menuItems.subMenuData = [
        {itemUrl: 'add-task', itemText: 'Add Task'}
/*
        {itemUrl: '#', itemText: 'Item Two'},
        {itemUrl: '#', itemText: 'Item Three'}
*/
    ]
    return menuItems;
})