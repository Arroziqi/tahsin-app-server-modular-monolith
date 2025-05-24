import { SetMetadata } from '@nestjs/common';
import { SKIP_INTERCEPTOR_KEY } from '../constants/key';

export const SkipInterceptor = () => SetMetadata(SKIP_INTERCEPTOR_KEY, true);
