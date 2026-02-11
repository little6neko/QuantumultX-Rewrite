var headers = $request.headers;

headers["Origin"] = "https://www.pandalive.co.kr";
headers["Referer"] = "https://www.pandalive.co.kr/";

$done({ headers });