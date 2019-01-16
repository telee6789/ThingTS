import { BaseObject } from '../base-object/BaseObject';
import { App } from '../core-object/App';

/*
 * @Author: kekeqy
 * @Date: 2018-12-10 16:18:40
 * @LastEditors: kekeqy
 * @LastEditTime: 2019-01-14 16:52:17
 * @Description: 3D场景内的嵌入网页，可以用于页面嵌入显示
 * @example
 * var webView = app.create({
 *      type: "WebView",
 *      position: [0, 5, 0],
 *      url: "http://www.thingjs.com",
 * 		width: 16,
 * 		height: 16
 * });
 */
export class WebView extends BaseObject {
    public constructor(app: App) {
        super(app);
        throw new Error('未实现！');
    }
}