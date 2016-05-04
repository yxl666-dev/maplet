// Generated by CoffeeScript 1.10.0
(function() {
  var reply_del, reply_it, reply_zan;

  reply_zan = function(sig, reply_id, id_num) {
    var AjaxUrl, zans;
    id_num = id_num.toString();
    zans = $("#text_zan").val();
    AjaxUrl = "/" + sig + "/toreply/zan/" + reply_id;
    return $.getJSON(AjaxUrl, function(Json) {
      if (Json.text_zan !== 0) {
        return $("#text_zan_" + id_num).html(Json.text_zan);
      }
    });
  };

  reply_del = function(sig, reply_id, id_num) {
    var AjaxUrl;
    id_num = id_num.toString();
    AjaxUrl = "/" + sig + "/toreply/delete_reply/" + reply_id;
    return $.getJSON(AjaxUrl, function(Json) {
      return $("#del_zan_" + id_num).html("");
    });
  };

  reply_it = function(sig, view_id) {
    var txt;
    txt = $("#cnt_md").val();
    if (txt.length < 30) {
      return;
    }
    $.post("/" + sig + "/toreply/add/" + view_id, {
      cnt_md: txt
    }, function(result) {
      var msg_json;
      msg_json = $.parseJSON(result);
      return $("#pinglun").load("/reply/get/" + msg_json.pinglun);
    });
    $("#cnt_md").val("");
    $("#cnt_md").attr("disabled", true);
    return $("#btn_submit_reply").attr("disabled", true);
  };

}).call(this);
