/*
 * @Author: chentian
 * @Date: 2019-02-23 15:17:05
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:17:05
 */
const memberMenu = [
    {
        name: 'siderMenu_member',
        icon: 'shop',
        path: 'member',
        children: [
            {
                name: 'siderMenu_member_card',
                path: 'membercard'
            },
            {
                name: 'siderMenu_member_list',
                path: 'memberlist'
            }
        ]
    }
];

export default memberMenu;
