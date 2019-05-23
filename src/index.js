import image2D from './image2D';


if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = image2D;
} else {
    let
        // 保存之前的image2D，防止直接覆盖
        _image2D = window.image2D,

        // 保存之前的$$，防止直接覆盖
        _$$ = window.$$;

    image2D.noConflict = function (deep) {

        // 如果当前的$$是被最新的image2D覆盖的
        // 恢复之前的
        if (window.$$ === image2D) {
            window.$$ = _$$;
        }

        // 如果当前的image2D是被最新的image2D覆盖的
        // 且标记需要恢复
        // 恢复之前的
        if (deep && window.image2D === image2D) {
            window.image2D = _image2D;
        }

        // 返回当前image2D
        // 因为调用这个方法以后
        // 全局window下的image2D和$$是什么
        // 已经不一定了
        return image2D;

    };
    // 挂载库对象到根
    window.image2D = window.$$ = image2D;
}
