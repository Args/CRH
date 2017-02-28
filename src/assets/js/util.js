/**
 * Created by PC-LHF on 2017-02-06.
 */


var EveryPageNum = 2;

function isInteger(obj) {
    return (obj | 0) === obj;
}

function isStringEmpty(data) {

    if (data == null)
        return true;
    return data.replace(/(^s*)|(s*$)/g, "").length == 0;
}

//验证Email是否正确
function regIsEmail(fData) {
    var reg =  new RegExp("^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$");
    return reg.test(fData);
}

//判断手机号是否正确
function regIsPhone(fData) {
    var reg =  /^1\d{10}$/;
    return reg.test(fData);
}

function getAudioType(fileName) {
    var voiceExt = fileName.substr(fileName.lastIndexOf(".")).toLowerCase();
    var audioType = "audio/mp3";
    switch (voiceExt) {
        case  ".mp3": {
            audioType = "audio/mp3";
            break;
        }
        case ".wav": {
            audioType = "audio/wav";
            break;
        }
        case ".wma": {
            audioType = "audio/wma";
            break;
        }
        case ".mid":
        case ".midi": {
            audioType = "audio/mid";
            break;
        }
        case ".ogg": {
            audioType = "audio/ogg";
            break;
        }
        default:
            break;
    }
    return audioType;
}

function getPageNum(totalRecords) {
    return Math.ceil(totalRecords / EveryPageNum)//当pager indicator超过10的时候显示
}

function getParameter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
