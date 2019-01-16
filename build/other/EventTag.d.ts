export declare enum EventTag {
    /**
     * 默认行为
     */
    Default = 0,
    /**
     * 通知场景层次中准备更改背景
     */
    LevelSetBackground = 1,
    /**
     * 通知场景层次响应
     */
    LevelSceneOperations = 2,
    /**
     * 通知场景层次设置候选集合
     */
    LevelSetCandidates = 3,
    /**
     * 通知场景层次中摄像机飞行
     */
    LevelFly = 4,
    /**
     * 通知场景层次进入操作
     */
    LevelEnterOperation = 5,
    /**
     * 通知场景层次回退操作
     */
    LevelBackOperation = 6
}
