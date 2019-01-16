/**
 * 插值类型
 * @typedef {Object} LerpType
 * @property {Object} Linear 线性插值
 * @property {Function} Linear.None 线性插值
 * @property {Object} Quadratic 二次插值
 * @property {Function} Quadratic.In 二次插值(In)
 * @property {Function} Quadratic.Out 二次插值(In)
 * @property {Function} Quadratic.InOut 二次插值(InOut)
 * @property {Object} Cubic 三次曲线插值
 * @property {Function} Cubic.In 三次插值(In)
 * @property {Function} Cubic.Out 三次插值(In)
 * @property {Function} Cubic.InOut 三次插值(InOut)
 * @property {Object} Quartic 四次插值
 * @property {Function} Quartic.In 四次插值(In)
 * @property {Function} Quartic.Out 四次插值(In)
 * @property {Function} Quartic.InOut 四次插值(InOut)
 * @property {Object} Quintic 五次插值
 * @property {Function} Quintic.In 五次插值(In)
 * @property {Function} Quintic.Out 五次插值(In)
 * @property {Function} Quintic.InOut 五次插值(InOut)
 * @property {Object} Sinusoidal 正弦曲线插值
 * @property {Function} Sinusoidal.In 正弦曲线插值(In)
 * @property {Function} Sinusoidal.Out 正弦曲线插值(In)
 * @property {Function} Sinusoidal.InOut 正弦曲线插值(InOut)
 * @property {Object} Exponential 指数插值
 * @property {Function} Exponential.In 指数插值(In)
 * @property {Function} Exponential.Out 指数插值(In)
 * @property {Function} Exponential.InOut 指数插值(InOut)
 * @property {Object} Circular 迂回插值
 * @property {Function} Circular.In 迂回插值(In)
 * @property {Function} Circular.Out 迂回插值(In)
 * @property {Function} Circular.InOut 迂回插值(InOut)
 * @property {Object} Elastic 弹性插值
 * @property {Function} Elastic.In 弹性插值(In)
 * @property {Function} Elastic.Out 弹性插值(In)
 * @property {Function} Elastic.InOut 弹性插值(InOut)
 * @property {Object} Back Back 插值
 * @property {Function} Back.In Back 插值(In)
 * @property {Function} Back.Out Back 插值(In)
 * @property {Function} Back.InOut Back 插值(InOut)
 * @property {Object} Bounce 弹跳插值
 * @property {Function} Bounce.In 弹跳插值(In)
 * @property {Function} Bounce.Out 弹跳插值(In)
 * @property {Function} Bounce.InOut 弹跳插值(InOut)
 * @memberof THING
 * @see http://sole.github.io/tween.js/examples/03_graphs.html
 */
export type LerpType = {
    Linear: {
        None: () => any;
    };
    Quadratic: {
        In: () => any;
        Out: () => any;
        InOut: () => any;
    };
    Cubic: {
        In: () => any;
        Out: () => any;
        InOut: () => any;
    };
    Quartic: {
        In: () => any;
        Out: () => any;
        InOut: () => any;
    };
    Quintic: {
        In: () => any;
        Out: () => any;
        InOut: () => any;
    };
    Sinusoidal: {
        In: () => any;
        Out: () => any;
        InOut: () => any;
    };
    Exponential: {
        In: () => any;
        Out: () => any;
        InOut: () => any;
    };
    Circular: {
        In: () => any;
        Out: () => any;
        InOut: () => any;
    };
    Elastic: {
        In: () => any;
        Out: () => any;
        InOut: () => any;
    };
    Back: {
        In: () => any;
        Out: () => any;
        InOut: () => any;
    };
    Bounce: {
        In: () => any;
        Out: () => any;
        InOut: () => any;
    };
};