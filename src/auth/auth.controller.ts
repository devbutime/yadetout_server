import {
    Body,
    Controller,
    Post,
    Request,
    UseGuards,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { AuthService } from "./auth.service";
import { PreRegisterDto, RegisterDto } from "./dto/register.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";

@ApiTags("authentication")
@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @UsePipes(new ValidationPipe())
    @Post("login")
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post("pre-register")
    async preRegister(@Body() userRegisterData: PreRegisterDto) {
        return this.authService.completeTheProfile(userRegisterData);
    }

    @Post("register")
    async register(@Body() userRegisterDto: RegisterDto) {
        const user = await this.authService.register(userRegisterDto);
        return user;
    }

    @Post("confirm-email")
    async confirmEmail(@Body() { token }: { token: string }) {
        const { valid, user } =
            await this.authService.validateEmailToken(token);

        if (valid) {
            const loginResponse = await this.authService.login(user);
            return {
                message: "Email confirmé avec succès et utilisateur connecté.",
                ...loginResponse,
            };
        }

        return {
            message: "Le token est invalide ou l'email n'a pas pu être validé.",
        };
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post("token-validate")
    async tokenValidate() {
        return this.authService.tokenValidate();
    }
}
