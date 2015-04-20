Template.dataEditor.events({

  'change .table-item-input': function (e) {

    var updateObj = {};
    updateObj[e.target.dataset.datatype] = isNumeric(e.target.value) ? +e.target.value : e.target.value;

    var searchObj = {
      deptID: e.target.dataset.dept,
      measureID: e.target.dataset.measure,
      timestamp: +e.target.dataset.timestamp
    };

    var itemID = e.target.dataset.itemid;
    if (!itemID) {
      var dp = DataPoints.findOne(searchObj);
      if (dp)
        itemID = dp._id;
    }

    if (!itemID) {
      itemID = DataPoints.insert(searchObj);
    }

    DataPoints.update(itemID, {$set: updateObj});
  }
});




