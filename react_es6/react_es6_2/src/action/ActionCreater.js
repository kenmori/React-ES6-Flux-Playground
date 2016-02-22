import {AppDispatcher} from 'dispatcher/AppDispatcher';
import {ListApiClient} from 'utils/ListApiClient';
import {ListConstants} from 'constants/ListConstants';

/**
 * Actionクラス
 */
export var ListAction = {

    init(condition) {
        AppDispatcher.dispatch({
            actionType:ListConstants.DISPATCH_INIT,
            condition
        });
    },

    getList(watash_id, condition) {
        // APIコールの前にローディング時の画像を描画
        AppDispatcher.dispatch({
            actionType:ListConstants.DISPATCH_LOAD_OVERLAY,
            condition
        });
        // ListAPI(GET)コール
        ListApiClient.get(watash_id, condition, this._getSuccess, this._getFailure);
    },

    // ListAPI(GET)成功時のコールバック
    _getSuccess(condition, result) {
        AppDispatcher.dispatch({
            actionType: ListConstants.DISPATCH_GET_SUCCESS,
            condition: condition,
            payload: result
        });
    },

    // ListAPI(GET)失敗時のコールバック
    _getFailure(condition, result, status) {
        AppDispatcher.dispatch({
            actionType: ListConstants.DISPATCH_GET_FAILURE,
            condition: condition,
            payload: result,
            status: status
        });
    }
};
