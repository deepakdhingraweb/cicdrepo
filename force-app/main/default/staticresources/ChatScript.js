var Comm100API = Comm100API || new Object;
            Comm100API.chat_buttons = Comm100API.chat_buttons || [];
            var comm100_chatButton = new Object;
            comm100_chatButton.code_plan = 5000012;
            comm100_chatButton.div_id = 'comm100-button-5000012';
            Comm100API.chat_buttons.push(comm100_chatButton);

            var comm100_chatButton_desktop = new Object;
            comm100_chatButton_desktop.code_plan = 5000012;
            comm100_chatButton_desktop.div_id = 'comm100-button-5000012-desktop';
            Comm100API.chat_buttons.push(comm100_chatButton_desktop);

            Comm100API.site_id = 129163;
            Comm100API.main_code_plan = 5000012;

            var comm100_lc = document.createElement('script');
            comm100_lc.type = 'text/javascript';
            comm100_lc.async = true;
            comm100_lc.src = 'https://chatserver.comm100.com/livechat.ashx?siteId=' + Comm100API.site_id;
			console.log(comm100_lc);
            var comm100_s = document.getElementsByTagName('script')[0];
			var comm100_s = document.getElementsByTagName('script')[0];
            comm100_s.parentNode.insertBefore(comm100_lc, comm100_s);
			console.log('InsideScript');
           
		 