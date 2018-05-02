if(Meteor.isServer) {
	Meteor.methods({
		setDefaultTemplateStatus:function(arrayOfTemplate){
			PanoplyCMSCollections.RegisteredPackages.update({name:'template'},
				{$set:{templates:arrayOfTemplate}})
		}
	})
}