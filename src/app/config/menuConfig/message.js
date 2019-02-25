/*
 * @Author: chentian
 * @Date: 2019-02-23 15:16:57
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 15:16:57
 */
const messageMenu = [
    {
        name: 'siderMenu_message',
        icon: 'sound',
        path: 'message',
        children: [
            {
                name: 'siderMenu_message_list',
                path: 'msglist'
            },
            {
                name: 'siderMenu_message_add',
                path: 'msgadd'
            }
        ]
    }
];

export default messageMenu;
