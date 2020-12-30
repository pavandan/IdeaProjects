//self.onmessage = (e) => {}

self.onmessage = function (e) {
    var limit = e.data[0];
    if(limit=='' || isNaN( parseInt(limit,10))){
        self.postMessage({error: 'Pleaae input an integer value!'} );
    }
    else if(limit<1 || limit>1000000){
        self.postMessage({error: 'Pleaae input an integer between 1 and 1000000!'} );
    }
    else {

        function isPrime(number) {
            var start=2;
            var sqrt_num=Math.sqrt(number);
            while(start <= sqrt_num){
                if(number % start++ <1) return false;
            }
            return number >1;
        }

        var n=0, total = 0;
        while(++n <=limit){
            var isprime=isPrime(n);
             total += isprime ?1:0;
             isprime && self.postMessage({working:true,found:total});
        }
        //final message from worker
        self.postMessage({done:true,found:total});

        //self.close();
    }
};