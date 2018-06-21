chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.cmd == "options") {
		
		//default options
		var options = {
			tab_filler : "	",
			space_cnt : 4,
			default_state : "enabled",
			icon : "focus"
		};
		
		//tab filler
		var tabFiller = "	";
		if(localStorage["tab_filler"] == "space") {
			if(localStorage["space_cnt"]!= null) {
				options.space_cnt = parseInt(localStorage["space_cnt"],10);
			}
			options.tab_filler = "";
			for(var i=0;i<options.space_cnt;i++) {
				options.tab_filler += " ";
			}
		}
		
		//default state
		if(localStorage["default_state"] == "disabled") {
			options.default_state = localStorage["default_state"];
		}
		
		//icon
		if(localStorage["icon"] == "show" || localStorage["icon"] == "hide") {
			options.icon = localStorage["icon"];
		}
		
		sendResponse(options);
		
	} else if(request.cmd == "show_icon") {
		showIcon(sender.tab.id, request.enabled);
	}
});

chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, "toggle_state", function(response) {
		showIcon(tab.id, response.enabled);
	});
	
});

function showIcon(tabId, enabled) {
	if(enabled) {
		chrome.pageAction.setIcon({"tabId": tabId, "path":"icon16.png"});
		chrome.pageAction.setTitle({"tabId": tabId, "title":"Textarea Formatter is enabled"});
		chrome.pageAction.show(tabId);
	} else {
		chrome.pageAction.setIcon({"tabId": tabId, "path":"icon16_disabled.png"});
		chrome.pageAction.setTitle({"tabId": tabId, "title":"Textarea Formatter is disabled"});
		chrome.pageAction.show(tabId);
	}
}