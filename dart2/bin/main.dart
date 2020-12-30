
import 'dart:io';
import 'dart:math' show Random;

Random intGenerator = Random();

Future main() async{

  HttpServer server = await HttpServer.bind(InternetAddress.loopbackIPv4, 4040);
  print('Listening on localhost: ${server.port}');
  await for (var request in server){
    dynamic myNumber = intGenerator.nextInt(10);

    request.response.write("I'm thinking of a number: $myNumber");

    await request.response.close();

  }


}
