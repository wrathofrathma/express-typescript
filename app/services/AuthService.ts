export const AuthService = {
	validate(token: String) {
		if (token.length != 0) {
			return true;
		}
		return false;
	}
}