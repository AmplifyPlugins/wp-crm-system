jQuery(document).ready(function(t){t("#dashboard-address-book").change(function(){return t("#address_book_loading").show(),data={action:"address_book_response",address_book_nonce:address_book_vars.address_book_nonce,contact_id:t("#dashboard-address-book").val()},t.post(ajaxurl,data,function(o){t("#address_book_results").html(o),t("#address_book_loading").hide(),t(".wpcrm-system-help-tip").tooltip({content:function(){return t(this).prop("title")},tooltipClass:"wpcrm-system-ui-tooltip",position:{my:"center top",at:"center bottom+10",collision:"flipfit"},hide:{duration:200},show:{duration:200}})}),!1})});