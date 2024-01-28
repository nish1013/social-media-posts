/**
 * TypeScript Example: Making Sure No API Response is Overlooked
 *
 * This example showcases the use of TypeScript's never type to guarantee that
 * every potential API response type is handled. It's a practical approach to
 * ensure that backend services robustly manage all possible outcomes from API
 * interactions.
 */

// Defining API response types
export interface SuccessResponse {
  status: 'success';
  data: Record<string, unknown>;
}

export interface ErrorResponse {
  status: 'error';
  error: Error;
}

export interface NotFoundResponse {
  status: 'not_found';
}

// Union of all API response types
export type ApiResponse = SuccessResponse | ErrorResponse | NotFoundResponse;

// To see TypeScript's error checking in action, try adding a new response
// type with a different 'status' value to the ApiResponse union. Then,
// TypeScript will flag an error in the handleApiResponse function if this
// new response type is not explicitly handled in the switch statement.
// This demonstrates how the 'never' type ensures comprehensive response
// handling.

// Function to process API responses
function handleApiResponse(response: ApiResponse) {
  switch (response.status) {
    case 'success':
      console.log('Handling success:', response.data);
      break;
    case 'error':
      console.error('Handling error:', response.error);
      break;
    case 'not_found':
      console.warn('Handling not found response');
      break;
    default:
      // TypeScript's safety net: raises an error if any ApiResponse type is
      // missed, ensuring comprehensive response handling.
      const _exhaustiveCheck: never = response;
      return _exhaustiveCheck;
  }
}

// Testing the function with a success response
const exampleResponse: ApiResponse = {
  status: 'success',
  data: { message: 'Operation successful' }
};
handleApiResponse(exampleResponse);