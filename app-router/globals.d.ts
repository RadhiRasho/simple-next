declare namespace NodeJS {
	interface ProcessEnv {
		DATABASE_URL: string;
		DATABASE_URL_UNPOOLED: string;
		PGHOST: string;
		PGHOST_UNPOOLED: string;
		PGUSER: string;
		PGDATABASE: string;
		PGPASSWORD: string;
		POSTGRES_URL: string;
		POSTGRES_URL_NON_POOLING: string;
		POSTGRES_USER: string;
		POSTGRES_HOST: string;
		POSTGRES_PASSWORD: string;
		POSTGRES_DATABASE: string;
		POSTGRES_URL_NO_SSL: string;
		POSTGRES_PRISMA_URL: string;
		connect_timeout: string;
		NEXT_PUBLIC_STACK_PROJECT_ID: string;
		NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY: string;
		STACK_SECRET_SERVER_KEY: string;
		AUTH_SECRET: string;
		AUTH_URL: string;
	}
}
