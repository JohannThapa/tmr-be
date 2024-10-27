import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseConfigService {
    private readonly supabase: SupabaseClient;

    constructor(private readonly configService: ConfigService) {
      const url = this.configService.get<string>('SUPABASE_URL');
      const key = this.configService.get<string>('SUPABASE_KEY');
      if (!url || !key) {
        throw new Error("Supabase configuration is missing");
      }  
      this.supabase = createClient(url, key);
    }
    
    getClient(): SupabaseClient {
        return this.supabase;
      }  
}
