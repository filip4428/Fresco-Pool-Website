<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$.getJSON('https://adapools.org/cache/pools/bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82.json', function(data) {
$.each( data, function( i, val ) { $( '#' + data.id + '_' + i ).text(val); });
});
</script>

My pool addr.: <span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_id"></span><br>
Tag: <span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_tag"></span><br>
Name: <span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_name"></span><br>
Total Stake: <span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_total_stake"></span><br>
Last Epoch Rewards: <span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_rewards_value_for_stakers"></span> Ada<br>
Tax Fixed: <span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_tax_fix"></span>%<br>
ROA: <span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_roa"></span>%<br>
Share: <span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_share"></span>%<br>
Rank: <span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_rank"></span><br>
Lifetime rewards for stakers: <span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_lifetime_stakers"></span> (<span id="bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82_lifetime_stakers_ada"></span> ada)<br>
More info on <a href="https://adapools.org/bd1d1aafead6f652f76f5921b4ffdb429d7eb9d5322d0f4700f4f70f997c5a82">AdaPools</a>