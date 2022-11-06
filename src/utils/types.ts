
export class PostRequestDto {
    url: string;
}

export class ResponseDto {
    from: string;
    to?: string;
    data?: string;
    value?: string;
    gas?: string;
    txId?: string;
}