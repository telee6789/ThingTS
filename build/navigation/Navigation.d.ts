export declare class Navigation {
    constructor();
    /**
     * 获取导航路径
     * @param {Object} params 参数列表
     * @param {String} params.startRoom? 起始房间，可以只提供世界坐标，但是同时提供房间的话，会提高寻路速度
     * @param {Array<Number>} params.startPosition 起始的世界坐标位置
     * @param {String} params.endRoom? 终止房间，可以只提供世界坐标，但是同时提供房间的话，会提高寻路速度
     * @param {Array<Number>} params.endPosition 终止的世界坐标位置
     * @return {Array<Number>} 路径节点(世界坐标集合), null 表示起始点和终止点之间不可达
     */
    findPath(params: {
        "startRoom?": string;
        startPosition: number[];
        "endRoom?": string;
        endPosition: number[];
    }): number[];
}
