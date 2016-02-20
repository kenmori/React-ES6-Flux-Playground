import {AppDispatcher} from 'dispatcher/AppDispatcher';
import {BasicStore} from 'store/BasicStore';
import {ListConstants} from 'constants/ListConstants';

export class Store extends BasicStore {
    constructor(){
        super();
    }
}

export var ListStore = new Store();

/**
 * Listリソースをstateに保持する
 *
 * @param stateKey  state内のネームペースを指定するkey
 * @param payload   APIのresponse Body
 * @param hasError  APIの呼び出し結果に対するエラーの有無
 * @param error     エラーの詳細
 */

var setList = (stateKey, condition, payload, hasError, error) => {
    ListStore.state[stateKey + '_' + condition] = {
        payload: payload,
        hasError: hasError,
        error: error || {}
    };
};

/**
 * ローディング状況をstateに保持する。
 *
 * @param isLoading
 * @param loaderClass
 */
var setLoader = (isLoading, loaderCss, condition) => {
    ListStore.state[ListConstants.STATE_KEY_LOADER + "_" + condition] = {
        loaderCss: loaderCss,
        isLoading: isLoading
    };
};

AppDispatcher.register((action) => {
    switch (action.actionType) {
        case ListConstants.DISPATCH_INIT:
            setLoader(true, ListConstants.LOADER_CLASS_OVERLAY, action.condition);
            ListStore.emitChangeState(ListConstants.DISPATCH_CHANGE_STATE);
            break;
        // LOADING描画
        case ListConstants.DISPATCH_LOAD_OVERLAY:
            setLoader(true, ListConstants.LOADER_CLASS_OVERLAY, action.condition);
            ListStore.emitChangeState(ListConstants.DISPATCH_CHANGE_STATE);
            break;
        // 取得したWebリソースの描画を行う（成功）
        case ListConstants.DISPATCH_GET_SUCCESS:
            setList(ListConstants.STATE_KEY_GET, action.condition, action.payload, false);
            setLoader(false, ListConstants.LOADER_CLASS_NONE, action.condition);
            ListStore.emitChangeState(ListConstants.DISPATCH_CHANGE_STATE);
            break;
        // 取得したWebリソースの描画を行う（失敗）
        case ListConstants.DISPATCH_GET_FAILURE:
            setList(ListConstants.GET, action.condition, action.error.payload, true, action.error);
            setLoader(false, ListConstants.LOADER_CLASS_NONE, action.condition);
            ListStore.emitChangeState(ListConstants.DISPATCH_CHANGE_STATE);
            break;
    }
});
