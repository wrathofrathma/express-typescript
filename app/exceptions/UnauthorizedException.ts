import BaseException from "./BaseException";

export default class UnauthorizedException extends BaseException {
	constructor(message: string = "Unauthorized Access") {
		super(message, 401);
	}
}