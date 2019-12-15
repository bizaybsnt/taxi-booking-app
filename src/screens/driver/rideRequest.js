import React, { Component } from 'react';

class RideRequest extends Component {
  render() {
    return (
      <div className="container py-4 col-md-4">
        Are you Available for ride?{' '}
        <div class="form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="available"
            id="yes"
            value="1"
            checked
          />
          <label class="form-check-label" for="yes">
            Yes
          </label>
        </div>
        <div class="form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="available"
            id="no"
            value="0"
          />
          <label class="form-check-label" for="no">
            No
          </label>
        </div>
      </div>
    );
  }
}

export default RideRequest;
