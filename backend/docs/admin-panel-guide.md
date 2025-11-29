# Admin Panel Guide

This guide explains how to use the admin panel for managing loan plans in your gold loan application.

## Accessing the Admin Panel

### Method 1: URL Parameter
Add `?admin=true` to your website URL:
```
https://yourwebsite.com?admin=true
```

### Method 2: Hidden Button
There's a hidden admin access button in the bottom-left corner of the public website. Hover over it to reveal the admin access button.

## Authentication

### Demo Credentials
- **Username:** `admin`
- **Password:** `admin123`

### Session Management
- Sessions last for 1 hour
- Automatically logged out after session expires
- Authentication state is stored in localStorage

## Admin Panel Features

### 1. Dashboard
The main dashboard provides:
- **Overview Statistics:** Total plans, active plans, average interest rate, system status
- **Recent Activity:** Log of recent changes and updates
- **Quick Actions:** Fast access to common tasks

### 2. Plans Management
Complete CRUD operations for loan plans:
- **View All Plans:** Filterable and sortable table view
- **Create New Plan:** Form-based plan creation
- **Edit Existing Plans:** Modify plan details
- **Delete Plans:** Remove plans with confirmation

### 3. Plan Creation/Editing
The form includes:
- **Basic Information:** Name, category, status
- **Financial Details:** Interest rate, tenure, processing fee
- **Loan Limits:** Minimum and maximum amounts
- **Features:** Multiple plan features with add/remove functionality
- **Special Offers:** Optional promotional text
- **Popular Plan Toggle:** Mark plans as popular

### 4. Analytics
View insights including:
- Plan category distribution
- Interest rate ranges
- Performance metrics

## Plan Management

### Creating a New Plan

1. **Navigate to Plans Tab**
2. **Click "Create Plan"** or use the form tab
3. **Fill Required Fields:**
   - Plan Name (required)
   - Interest Rate (required)
   - Maximum Tenure (required)
   - Minimum Amount (required)
   - Maximum Amount (required)
   - Category (required)

4. **Add Features:**
   - Enter plan features (at least one required)
   - Use "Add Feature" to include multiple benefits
   - Remove features with the trash icon

5. **Optional Settings:**
   - Processing fee (0 for free)
   - Special offer text
   - Mark as popular plan
   - Set status (active/inactive)

6. **Preview and Save:**
   - Review the preview section
   - Click "Create Plan" to save

### Editing Existing Plans

1. **Find the Plan:** Use search or filters in the Plans tab
2. **Click Edit Button:** In the actions column
3. **Modify Fields:** Update any plan details
4. **Save Changes:** Click "Update Plan"

### Plan Filtering and Search

- **Search:** Type plan name or category
- **Category Filter:** Filter by Basic, Premium, or Elite
- **Status Filter:** Show active, inactive, or all plans
- **Sorting:** Click column headers to sort

### Plan Categories

- **Basic:** Entry-level plans (typically 10K-1L range)
- **Premium:** Mid-tier plans (typically 50K-5L range)
- **Elite:** High-value plans (typically 2L+ range)

## Security Features

### Authentication
- Username/password authentication
- Session timeout (1 hour)
- Secure credential storage

### Data Validation
- Required field validation
- Numeric field constraints
- Logical validation (max > min amounts)

### Error Handling
- Form validation errors
- API error messages
- Graceful fallbacks

## Production Setup

### 1. Replace Demo Authentication
```typescript
// In components/AdminAuth.tsx
// Replace demo credentials with actual authentication API
const authenticateUser = async (username: string, password: string) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  
  if (!response.ok) throw new Error('Authentication failed');
  
  const { token } = await response.json();
  localStorage.setItem('auth_token', token);
  return token;
};
```

### 2. Implement Role-Based Access
```typescript
// Add role checking
const userRole = localStorage.getItem('user_role');
if (userRole !== 'admin') {
  throw new Error('Insufficient permissions');
}
```

### 3. API Integration
The admin panel uses the existing loan plans service. Ensure your backend implements:
- `GET /api/v1/loan-plans` - List plans
- `POST /api/v1/loan-plans` - Create plan
- `PUT /api/v1/loan-plans/:id` - Update plan
- `DELETE /api/v1/loan-plans/:id` - Delete plan

### 4. Security Headers
```typescript
// Add security headers to your API
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});
```

## Customization

### Adding New Plan Fields
1. **Update the LoanPlan interface** in `services/loanPlansService.ts`
2. **Add form fields** in `components/LoanPlanForm.tsx`
3. **Update the table** in `components/LoanPlansList.tsx`
4. **Modify validation** in the form component

### Custom Styling
The admin panel uses the same Tailwind CSS classes as the main application. Modify styles in the component files or add custom CSS classes.

### Adding New Features
1. **Dashboard Widgets:** Add new cards to the dashboard
2. **Analytics:** Create custom charts and metrics
3. **Bulk Operations:** Add bulk edit/delete functionality
4. **Export/Import:** Add CSV/Excel export features

## Troubleshooting

### Common Issues

1. **Authentication Not Working**
   - Check demo credentials (admin/admin123)
   - Clear localStorage and try again
   - Check browser console for errors

2. **Plans Not Loading**
   - Check API configuration in `config/app.config.ts`
   - Verify network requests in browser DevTools
   - Check fallback mock data

3. **Form Validation Errors**
   - Ensure all required fields are filled
   - Check numeric field constraints
   - Verify min/max amount logic

4. **Session Expired**
   - Sessions last 1 hour by default
   - Login again to refresh session
   - Check browser console for auth errors

### Debug Mode
Enable debug logging by adding this to your browser console:
```javascript
localStorage.setItem('debug', 'true');
```

## Performance Optimization

### Caching
The admin panel uses the same caching system as the public site:
- 5-minute cache for plan data
- Smart cache invalidation on updates
- LocalStorage for user preferences

### Large Datasets
For applications with many plans:
- Implement pagination in the plans list
- Add server-side filtering
- Use virtual scrolling for large tables

## Backup and Recovery

### Data Export
Currently plans are managed through the API. For backup:
1. Use the API to export all plans
2. Store in JSON format
3. Implement import functionality

### Version Control
Track changes to plans:
- Add audit logs to track modifications
- Implement plan versioning
- Store change history

## API Documentation

### Plan Object Structure
```typescript
interface LoanPlan {
  id: string;
  name: string;
  interestRate: number;
  maxTenure: number;
  minAmount: number;
  maxAmount: number;
  processingFee: number;
  features: string[];
  specialOffer?: string;
  isPopular?: boolean;
  category: 'basic' | 'premium' | 'elite';
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}
```

### API Endpoints
- `GET /api/v1/loan-plans?loanAmount=100000` - Get filtered plans
- `POST /api/v1/loan-plans` - Create new plan
- `PUT /api/v1/loan-plans/:id` - Update plan
- `DELETE /api/v1/loan-plans/:id` - Delete plan

### Response Format
```json
{
  "plans": [...],
  "total": 6,
  "message": "Success"
}
```

## Future Enhancements

### Planned Features
- Bulk operations (import/export CSV)
- Advanced analytics and reporting
- Plan templates and duplication
- Approval workflow for plan changes
- Multi-language support for plan content
- Integration with loan application system

### Contributing
To add new features to the admin panel:
1. Create feature branch
2. Update relevant components
3. Add tests for new functionality
4. Update documentation
5. Submit pull request

The admin panel is designed to be extensible and maintainable, following the same patterns as the main application.