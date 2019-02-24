/*
 * @Author: chentian
 * @Date: 2019-02-23 15:16:13
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:16:13
 */

const systemMenu = [
    {
        name: 'siderMenu_system',
        icon: 'dashboard',
        path: 'system',
        children: [
            {
                name: 'siderMenu_system_setting1',
                path: 'setting1'
            },
            {
                name: 'siderMenu_system_setting2',
                path: 'setting2'
            },
            {
                name: 'siderMenu_promotion',
                path: 'promotion'
            },
            {
                name: 'siderMenu_qr',
                path: 'qr'
            },
            {
                name: 'siderMenu_pageinfo',
                path: 'pageinfo'
            },
            {
                name: 'siderMenu_share',
                path: 'share'
            }
        ]
    }
];

export default systemMenu;
