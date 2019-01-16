/*
 * @Author: kekeqy
 * @Date: 2018-12-11 12:23:19
 * @LastEditors: kekeqy
 * @LastEditTime: 2018-12-11 12:24:06
 * @Description: 内核事件
 */
export enum EventType {
    /**
     * 通知系统初始化完成
     */
    AppComplete,
    /**
     * 通知窗口大小变化(width, height)
     */
    Resize,
    /**
     * 通知每帧更新
     */
    Update,
    /**
     * 通知后台资源下载进度
     */
    DownloadProgress,
    /**
     * 通知场景资源加载进度
     */
    LoadCampusProgress,
    /**
     * 通知场景准备开始加载
     */
    BeforeLoadCampus,
    /**
     * 通知场景加载完成
     */
    LoadCampus,
    /**
     * 通知场景卸载
     */
    UnloadCampus,
    /**
     * 通知物体被拾取
     */
    PickObject,
    /**
     * 通知框选物体开始
     */
    AreaPickStart,
    /**
     * 通知框选物体中
     */
    AreaPicking,
    /**
     * 通知框选物体结束
     */
    AreaPickEnd,
    /**
     * 通知鼠标按下事件，注意只要是鼠标按下就会触发(双击的时候也会被触发两次)
     */
    Click,
    /**
     * 通知鼠标左键双击
     */
    DBLClick,
    /**
     * 通知鼠标右键双击
     */
    DBRClick,
    /**
     * 通知鼠标点击(会有些许的延时，区别于Click事件的是只会响应单击事件,鼠标双击的话是不会触发的)
     */
    SingleClick,
    /**
     * 通知鼠标键抬起
     */
    MouseUp,
    /**
     * 通知鼠标键按下
     */
    MouseDown,
    /**
     * 通知鼠标移动
     */
    MouseMove,
    /**
     * 通知鼠标首次移入物体
     */
    MouseEnter,
    /**
     * 通知鼠标首次移入物体, 会一直传递到父物体
     */
    MouseOver,
    /**
     * 通知鼠标首次移出物体
     */
    MouseLeave,
    /**
     * 通知物体拖拽开始
     */
    DragStart,
    /**
     * 通知物体拖拽进行中
     */
    Dragging,
    /**
     * 通知物体拖拽结束
     */
    DragEnd,
    /**
     * 通知键盘按键按下
     */
    KeyDown,
    /**
     * 通知键盘按键一直被按下
     */
    KeyPress,
    /**
     * 通知键盘按键抬起
     */
    KeyUp,
    /**
     * 通知摄像机位置变动开始
     */
    CameraChangeStart,
    /**
     * 通知摄像机位置变动结束
     */
    CameraChangeEnd,
    /**
     * 通知摄像机位置变动中
     */
    CameraChange,
    CameraWheel,
    /**
     * 通知摄像机观察模式改动
     */
    CameraViewChange,
    /**
     * 通知物体创建完成
     */
    CreateObject,
    /**
     * 通知物体准备被删除
     */
    DestroyObject,
    /**
     * 通知建筑被展开
     */
    ExpandBuilding,
    /**
     * 通知建筑被合并
     */
    UnexpandBuilding,
    Push,
    Redo,
    Undo,
    beforeEnterState,
    afterEnterState,
    SelectEditableObject,
    UnselectEditableObject,
    /**
     * 通知场景层次准备开始切换
     */
    BeforeLevelChange,
    /**
     * 通知场景层次发生改变
     */
    LevelChange,
    /**
     * 通知准备进入物体层级
     */
    BeforeEnterLevel,
    /**
     * 通知进入物体层级
     */
    EnterLevel,
    /**
     * 通知场景层次中加载场景资源, 通常用于加载动态子场景
     */
    LevelLoadScene,
    /**
     * 通知退出物体层级
     */
    LeaveLevel,
}