"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Cattle io | API Explorer ')
        .setDescription('Cattle.io is realtime iot platform for cattle sensors logging')
        .setVersion('1.0')
        .addTag('cattle, iot, sensor, arduino, wifi, ch4')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('explorer', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map