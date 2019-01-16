/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:22:12
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 13:58:44
 * @Description: 内核事件Tag名称
 */
export enum EventTag {
    /**
     * 默认行为
     */
    Default,
    /**
     * 通知场景层次中准备更改背景
     */
    LevelSetBackground,
    /**
     * 通知场景层次响应
     */
    LevelSceneOperations,
    /**
     * 通知场景层次设置候选集合
     */
    LevelSetCandidates,
    /**
     * 通知场景层次中摄像机飞行
     */
    LevelFly,
    /**
     * 通知场景层次进入操作
     */
    LevelEnterOperation,
    /**
     * 通知场景层次回退操作
     */
    LevelBackOperation,
}