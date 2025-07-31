import type { Linter } from 'eslint';

/**
 * ESLint configuration for React TypeScript projects.
 *
 * This configuration includes:
 * - TypeScript ESLint recommended rules
 * - React and React Hooks support
 * - JSX accessibility rules
 * - Import/export organization
 * - Prettier integration
 * - Unused imports cleanup
 * - Arrow function preferences
 * - Custom code formatting rules
 */
declare const config: Linter.Config[];

export = config;
export default config;
