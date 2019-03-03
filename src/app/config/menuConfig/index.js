/*
 * @Author: chentian
 * @Date: 2019-02-23 13:29:16
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-23 13:29:16
 */
import system from './system';
import member from './member';
import assessor from './assessor';
import product from './product';
import message from './message';
import log from './log';
import userCenter from './userCenter';

const menuData = [...system, ...member, ...assessor, ...product, ...message, ...log, ...userCenter];

export default menuData;
