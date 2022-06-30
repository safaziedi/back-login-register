import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCurretUserById = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request?.user;
  },
);

export * from './get-user-by-id.decorator'
