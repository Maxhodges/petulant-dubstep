Template.dataEditor.helpers({

  periods: function() {
    var ret = [];

    for (var i = 0; i < 12; i++) {
      ret.push({
        timestamp: Date.UTC(2015, i, 1),
        measure: Session.get('current-measure')._id
      });
    }

    return ret;
  },

  dataPointValue: function(kw) {
    var dp = DataPoints.findOne({
      timestamp: kw.hash.timestamp,
      measureID: measureID,
      deptID: deptID
    });

    return dp[kw.hash.dataType];
  },
});

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
