//読み込み完了後に実行する
$(function() {
    // #searchBtnがクリックされたとき
    $('#searchBtn').on('click', function(){
        $.ajax({
            // zipcloudのAPIエンドポイント
            url: 'https://zipcloud.ibsnet.co.jp/api/search',
            dataType: 'json',
            data: {
                zipcode: $('#zipcode').val()
            }
        }).done(function(data){
            console.log(data); // レスポンス内容を確認
            if(data.results){
                setData(data.results[0]); // zipcloudは配列で返す
            }else{
                alert("該当するデータが見つかりませんでした");
            }
        }).fail(function(){
            alert("通信に失敗しました");
        });
    });
});

function setData(data){
    // zipcloudのレスポンス仕様に合わせて代入
    $('#prefecture').val(data.address1);
    $('#city').val(data.address2);
    $('#address').val(data.address3);
}