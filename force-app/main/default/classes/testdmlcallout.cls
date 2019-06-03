public class testdmlcallout {

    @Auraenabled
    public static void dodml(){
        Account acc = new account(id='0016F00002nE9l1QAC');
        acc.name = 'deepak';
        update acc;
    }
     @Auraenabled
    public static string makecallout(){
        
         HttpRequest req = new HttpRequest();
     req.setEndpoint('https://restcountries.eu/rest/v2/name/India');
     req.setMethod('GET');
    
     // Create a new http object to send the request object
     // A response object is generated as a result of the request  
  
     Http http = new Http();
     HTTPResponse res = http.send(req);
     System.debug(res.getBody());
        return res.getBody();

    }
}