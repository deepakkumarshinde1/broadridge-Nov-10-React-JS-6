import React from "react";

function CreateAccount() {
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-11 col-lg-6 col-md-8  mt-5 card p-5">
          <h3 className="text-primary">User Login</h3>
          <form action="#" method="POST" enctype="multipart/form-data">
            {/* <!-- Personal Information --> */}
            <h5 class="text-primary mb-3">1. Personal Information</h5>

            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  placeholder="Enter first name"
                  required
                />
              </div>

              <div class="col-md-6">
                <label class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                />
                <div class="form-text">Enter a valid email address.</div>
              </div>

              <div class="col-md-6">
                <label class="form-label">Mobile Number</label>
                <input
                  type="tel"
                  class="form-control"
                  name="mobile"
                  placeholder="Enter mobile number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Date of Birth</label>
                <input type="date" class="form-control" name="dob" />
              </div>

              <div class="col-md-6">
                <label class="form-label">Age</label>
                <input
                  type="number"
                  class="form-control"
                  name="age"
                  min="18"
                  max="100"
                  placeholder="Enter age"
                />
              </div>
            </div>

            {/* <!-- Gender Radio Buttons --> */}
            <div class="mb-3">
              <label class="form-label d-block">Gender</label>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                />
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                />
                <label class="form-check-label" for="female">
                  Female
                </label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="Other"
                />
                <label class="form-check-label" for="other">
                  Other
                </label>
              </div>
            </div>

            <hr />

            {/* <!-- Address Information --> */}
            <h5 class="text-primary mb-3">2. Address Information</h5>

            <div class="mb-3">
              <label class="form-label">Address</label>
              <textarea
                class="form-control"
                name="address"
                rows="3"
                placeholder="Enter complete address"
              ></textarea>
            </div>

            <div class="row mb-3">
              <div class="col-md-4">
                <label class="form-label">Country</label>
                <select class="form-select" name="country">
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>

              <div class="col-md-4">
                <label class="form-label">State</label>
                <select class="form-select" name="state">
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Goa">Goa</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
              </div>

              <div class="col-md-4">
                <label class="form-label">PIN Code</label>
                <input
                  type="text"
                  class="form-control"
                  name="pincode"
                  maxlength="6"
                  placeholder="422001"
                />
              </div>
            </div>

            <hr />

            {/* <!-- Account Information --> */}
            <h5 class="text-primary mb-3">3. Account Information</h5>

            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Username</label>
                <div class="input-group">
                  <span class="input-group-text">@</span>
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    placeholder="Choose username"
                    required
                  />
                </div>
              </div>

              <div class="col-md-6">
                <label class="form-label">Account Type</label>
                <select class="form-select" name="accountType">
                  <option value="">Select Account Type</option>
                  <option value="Personal">Personal</option>
                  <option value="Business">Business</option>
                  <option value="Student">Student</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Enter password"
                  minlength="8"
                  required
                />
              </div>

              <div class="col-md-6">
                <label class="form-label">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>

            {/* <!-- HTML5 Input Types --> */}
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Website</label>
                <input
                  type="url"
                  class="form-control"
                  name="website"
                  placeholder="https://example.com"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label">Search Profile</label>
                <input
                  type="search"
                  class="form-control"
                  name="search"
                  placeholder="Search something..."
                />
              </div>
            </div>

            <hr />

            {/* <!-- Preferences --> */}
            <h5 class="text-primary mb-3">4. Preferences</h5>

            <div class="mb-3">
              <label class="form-label">Select Skills</label>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="skills[]"
                  value="HTML"
                />
                <label class="form-check-label">HTML</label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="skills[]"
                  value="CSS"
                />
                <label class="form-check-label">CSS</label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="skills[]"
                  value="JavaScript"
                />
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="skills[]"
                  value="React"
                />
                <label class="form-check-label">React JS</label>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">Select Multiple Hobbies</label>
              <select class="form-select" name="hobbies[]" multiple size="4">
                <option value="Reading">Reading</option>
                <option value="Music">Music</option>
                <option value="Sports">Sports</option>
                <option value="Travel">Travel</option>
                <option value="Coding">Coding</option>
              </select>
              <div class="form-text">
                Hold Ctrl (Windows) or Command (Mac) to select multiple options.
              </div>
            </div>

            {/* <!-- Range --> */}
            <div class="mb-3">
              <label class="form-label">Experience Level</label>
              <input
                type="range"
                class="form-range"
                name="experience"
                min="0"
                max="10"
                value="3"
              />
              <div class="d-flex justify-content-between">
                <small>Beginner</small>
                <small>Expert</small>
              </div>
            </div>

            {/* <!-- Color --> */}
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Choose Profile Theme</label>
                <input
                  type="color"
                  class="form-control form-control-color"
                  name="themeColor"
                  value="#0d6efd"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label">Preferred Login Time</label>
                <input type="time" class="form-control" name="loginTime" />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Account Activation Date</label>
                <input
                  type="datetime-local"
                  class="form-control"
                  name="activationDate"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label">Available From</label>
                <input
                  type="month"
                  class="form-control"
                  name="availableMonth"
                />
              </div>
            </div>

            <hr />

            {/* <!-- Documents --> */}
            <h5 class="text-primary mb-3">5. Upload Documents</h5>

            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">Profile Picture</label>
                <input
                  type="file"
                  class="form-control"
                  name="profilePicture"
                  accept="image/*"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label">Upload Resume</label>
                <input
                  type="file"
                  class="form-control"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                />
              </div>
            </div>

            {/* <!-- Switch --> */}
            <div class="mb-3">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  name="notifications"
                  id="notifications"
                  checked
                />
                <label class="form-check-label" for="notifications">
                  Enable Email Notifications
                </label>
              </div>
            </div>

            {/* <!-- Terms --> */}
            <div class="mb-4">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="terms"
                  id="terms"
                  required
                />
                <label class="form-check-label" for="terms">
                  I agree to the Terms and Conditions.
                </label>
              </div>
            </div>

            {/* <!-- Buttons --> */}
            <div class="d-flex gap-2">
              <button type="submit" class="btn btn-primary">
                Create Account
              </button>

              <button type="reset" class="btn btn-warning">
                Reset Form
              </button>

              <button
                type="button"
                class="btn btn-secondary"
                onclick="alert('Form cancelled!')"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default CreateAccount;
