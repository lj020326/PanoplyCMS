if(Meteor.isServer) {
	Meteor.methods({
		deleteCategory: function(id){
			PanoplyCMSCollections.Categories.update({ _id: id },{ $set:{ trash:true } });
		},
		updateCategory: function(id, data){
		  return PanoplyCMSCollections.Categories.update({ _id: id }, {
				$set: {
					title: data.title,
					alias: data.alias,
		    	column:data.column,
					updateAt: new Date()
				}
			});
		},
		addCategory: function(data){
		  return PanoplyCMSCollections.Categories.insert({
				title: data.title,
				alias: data.alias,
				createdAt: new Date(),
				updateAt: '',
			    status:1,
			    trash:false,
			    column:data.column,
				ownerId: Meteor.userId()
			});
		},
		restoreCategory:function(id){
			PanoplyCMSCollections.Categories.update({_id:id},{ $set:{ trash:false} })
		},
		deleteCategoryPermanent:function(id){
			PanoplyCMSCollections.Categories.remove({ _id:id })
		}
	});
}