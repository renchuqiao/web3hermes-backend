
export class PostRequestDto {
    url: string;
}

export class PostResponseDto {
    from: string;
    to?: string;
    data?: string;
    value?: string;
    gas?: string;
    txId?: string;
}