
export var CountApiClient = {
    GET_URL: '/fafa/',
    requests: {},
    get(watshi_id, condition, success, failure) {
        var url = this._createUrl(watshi_id);
        // APIコール/
        this.requests['get' + condition] = $.ajax({type: 'GET', contentType: 'application/json', scriptCharset: 'utf-8', url: url});
        // 結果ハンドリング. jqueryの$.ajaxの仕様としてthenのパラメータ関数１つめが成功時, 2つめが失敗時の振る舞いとなる。
        this.requests['get' + condition].done((result) => {
            success(condition, result, condition);
        }).fail((result, status) => {
            failure(condition, result, status);
        });
    },
    //クエリを付け足してapiコール用のurlを作成
    _createUrl(watshi_id) {
        return this.GET_URL + '?watshi_id=' + watshi_id
    }
};
