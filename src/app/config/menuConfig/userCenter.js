/*
 * @Author: chentian
 * @Date: 2019-02-23 15:23:36
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:23:36
 */
const userCenterMenu = [
    {
        name: 'siderMenu_user_center',
        icon: 'user',
        path: 'usercenter',
        children: [
            {
                name: 'siderMenu_modify_info',
                path: 'modifyinfo'
            },
            {
                name: 'siderMenu_member_info',
                path: 'memberinfo'
            },
            {
                name: 'siderMenu_user_info',
                path: 'userinfo'
            }
        ]
    }
];

export default userCenterMenu;
