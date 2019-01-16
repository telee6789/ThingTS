export declare enum EventType {
    /**
     * 通知系统初始化完成
     */
    AppComplete = 0,
    /**
     * 通知窗口大小变化(width, height)
     */
    Resize = 1,
    /**
     * 通知每帧更新
     */
    Update = 2,
    /**
     * 通知后台资源下载进度
     */
    DownloadProgress = 3,
    /**
     * 通知场景资源加载进度
     */
    LoadCampusProgress = 4,
    /**
     * 通知场景准备开始加载
     */
    BeforeLoadCampus = 5,
    /**
     * 通知场景加载完成
     */
    LoadCampus = 6,
    /**
     * 通知场景卸载
     */
    UnloadCampus = 7,
    /**
     * 通知物体被拾取
     */
    PickObject = 8,
    /**
     * 通知框选物体开始
     */
    AreaPickStart = 9,
    /**
     * 通知框选物体中
     */
    AreaPicking = 10,
    /**
     * 通知框选物体结束
     */
    AreaPickEnd = 11,
    /**
     * 通知鼠标按下事件，注意只要是鼠标按下就会触发(双击的时候也会被触发两次)
     */
    Click = 12,
    /**
     * 通知鼠标左键双击
     */
    DBLClick = 13,
    /**
     * 通知鼠标右键双击
     */
    DBRClick = 14,
    /**
     * 通知鼠标点击(会有些许的延时，区别于Click事件的是只会响应单击事件,鼠标双击的话是不会触发的)
     */
    SingleClick = 15,
    /**
     * 通知鼠标键抬起
     */
    MouseUp = 16,
    /**
     * 通知鼠标键按下
     */
    MouseDown = 17,
    /**
     * 通知鼠标移动
     */
    MouseMove = 18,
    /**
     * 通知鼠标首次移入物体
     */
    MouseEnter = 19,
    /**
     * 通知鼠标首次移入物体, 会一直传递到父物体
     */
    MouseOver = 20,
    /**
     * 通知鼠标首次移出物体
     */
    MouseLeave = 21,
    /**
     * 通知物体拖拽开始
     */
    DragStart = 22,
    /**
     * 通知物体拖拽进行中
     */
    Dragging = 23,
    /**
     * 通知物体拖拽结束
     */
    DragEnd = 24,
    /**
     * 通知键盘按键按下
     */
    KeyDown = 25,
    /**
     * 通知键盘按键一直被按下
     */
    KeyPress = 26,
    /**
     * 通知键盘按键抬起
     */
    KeyUp = 27,
    /**
     * 通知摄像机位置变动开始
     */
    CameraChangeStart = 28,
    /**
     * 通知摄像机位置变动结束
     */
    CameraChangeEnd = 29,
    /**
     * 通知摄像机位置变动中
     */
    CameraChange = 30,
    CameraWheel = 31,
    /**
     * 通知摄像机观察模式改动
     */
    CameraViewChange = 32,
    /**
     * 通知物体创建完成
     */
    CreateObject = 33,
    /**
     * 通知物体准备被删除
     */
    DestroyObject = 34,
    /**
     * 通知建筑被展开
     */
    ExpandBuilding = 35,
    /**
     * 通知建筑被合并
     */
    UnexpandBuilding = 36,
    Push = 37,
    Redo = 38,
    Undo = 39,
    beforeEnterState = 40,
    afterEnterState = 41,
    SelectEditableObject = 42,
    UnselectEditableObject = 43,
    /**
     * 通知场景层次准备开始切换
     */
    BeforeLevelChange = 44,
    /**
     * 通知场景层次发生改变
     */
    LevelChange = 45,
    /**
     * 通知准备进入物体层级
     */
    BeforeEnterLevel = 46,
    /**
     * 通知进入物体层级
     */
    EnterLevel = 47,
    /**
     * 通知场景层次中加载场景资源, 通常用于加载动态子场景
     */
    LevelLoadScene = 48,
    /**
     * 通知退出物体层级
     */
    LeaveLevel = 49
}
