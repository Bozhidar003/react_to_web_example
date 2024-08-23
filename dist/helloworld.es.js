function Tf(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
var Ta = { exports: {} }, yr = {}, _u = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function Lf() {
  if (Ea) return M;
  Ea = 1;
  var L = Symbol.for("react.element"), V = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), ge = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), me = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), A = Symbol.iterator;
  function G(c) {
    return c === null || typeof c != "object" ? null : (c = A && c[A] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var Be = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, We = Object.assign, Z = {};
  function $(c, v, O) {
    this.props = c, this.context = v, this.refs = Z, this.updater = O || Be;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(c, v) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, v, "setState");
  }, $.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function vn() {
  }
  vn.prototype = $.prototype;
  function sn(c, v, O) {
    this.props = c, this.context = v, this.refs = Z, this.updater = O || Be;
  }
  var Je = sn.prototype = new vn();
  Je.constructor = sn, We(Je, $.prototype), Je.isPureReactComponent = !0;
  var we = Array.isArray, qe = Object.prototype.hasOwnProperty, xe = { current: null }, ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(c, v, O) {
    var D, I = {}, j = null, Q = null;
    if (v != null) for (D in v.ref !== void 0 && (Q = v.ref), v.key !== void 0 && (j = "" + v.key), v) qe.call(v, D) && !ze.hasOwnProperty(D) && (I[D] = v[D]);
    var B = arguments.length - 2;
    if (B === 1) I.children = O;
    else if (1 < B) {
      for (var J = Array(B), je = 0; je < B; je++) J[je] = arguments[je + 2];
      I.children = J;
    }
    if (c && c.defaultProps) for (D in B = c.defaultProps, B) I[D] === void 0 && (I[D] = B[D]);
    return { $$typeof: L, type: c, key: j, ref: Q, props: I, _owner: xe.current };
  }
  function Pn(c, v) {
    return { $$typeof: L, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function yn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === L;
  }
  function Yn(c) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(O) {
      return v[O];
    });
  }
  var an = /\/+/g;
  function Ie(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yn("" + c.key) : v.toString(36);
  }
  function be(c, v, O, D, I) {
    var j = typeof c;
    (j === "undefined" || j === "boolean") && (c = null);
    var Q = !1;
    if (c === null) Q = !0;
    else switch (j) {
      case "string":
      case "number":
        Q = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case L:
          case V:
            Q = !0;
        }
    }
    if (Q) return Q = c, I = I(Q), c = D === "" ? "." + Ie(Q, 0) : D, we(I) ? (O = "", c != null && (O = c.replace(an, "$&/") + "/"), be(I, v, O, "", function(je) {
      return je;
    })) : I != null && (yn(I) && (I = Pn(I, O + (!I.key || Q && Q.key === I.key ? "" : ("" + I.key).replace(an, "$&/") + "/") + c)), v.push(I)), 1;
    if (Q = 0, D = D === "" ? "." : D + ":", we(c)) for (var B = 0; B < c.length; B++) {
      j = c[B];
      var J = D + Ie(j, B);
      Q += be(j, v, O, J, I);
    }
    else if (J = G(c), typeof J == "function") for (c = J.call(c), B = 0; !(j = c.next()).done; ) j = j.value, J = D + Ie(j, B++), Q += be(j, v, O, J, I);
    else if (j === "object") throw v = String(c), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return Q;
  }
  function cn(c, v, O) {
    if (c == null) return c;
    var D = [], I = 0;
    return be(c, D, "", "", function(j) {
      return v.call(O, j, I++);
    }), D;
  }
  function Te(c) {
    if (c._status === -1) {
      var v = c._result;
      v = v(), v.then(function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = O);
      }, function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = O);
      }), c._status === -1 && (c._status = 0, c._result = v);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ne = { current: null }, k = { transition: null }, T = { ReactCurrentDispatcher: ne, ReactCurrentBatchConfig: k, ReactCurrentOwner: xe };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: cn, forEach: function(c, v, O) {
    cn(c, function() {
      v.apply(this, arguments);
    }, O);
  }, count: function(c) {
    var v = 0;
    return cn(c, function() {
      v++;
    }), v;
  }, toArray: function(c) {
    return cn(c, function(v) {
      return v;
    }) || [];
  }, only: function(c) {
    if (!yn(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, M.Component = $, M.Fragment = m, M.Profiler = ye, M.PureComponent = sn, M.StrictMode = pe, M.Suspense = H, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, M.act = _, M.cloneElement = function(c, v, O) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var D = We({}, c.props), I = c.key, j = c.ref, Q = c._owner;
    if (v != null) {
      if (v.ref !== void 0 && (j = v.ref, Q = xe.current), v.key !== void 0 && (I = "" + v.key), c.type && c.type.defaultProps) var B = c.type.defaultProps;
      for (J in v) qe.call(v, J) && !ze.hasOwnProperty(J) && (D[J] = v[J] === void 0 && B !== void 0 ? B[J] : v[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) D.children = O;
    else if (1 < J) {
      B = Array(J);
      for (var je = 0; je < J; je++) B[je] = arguments[je + 2];
      D.children = B;
    }
    return { $$typeof: L, type: c.type, key: I, ref: j, props: D, _owner: Q };
  }, M.createContext = function(c) {
    return c = { $$typeof: ge, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: Ce, _context: c }, c.Consumer = c;
  }, M.createElement = $e, M.createFactory = function(c) {
    var v = $e.bind(null, c);
    return v.type = c, v;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(c) {
    return { $$typeof: re, render: c };
  }, M.isValidElement = yn, M.lazy = function(c) {
    return { $$typeof: ae, _payload: { _status: -1, _result: c }, _init: Te };
  }, M.memo = function(c, v) {
    return { $$typeof: me, type: c, compare: v === void 0 ? null : v };
  }, M.startTransition = function(c) {
    var v = k.transition;
    k.transition = {};
    try {
      c();
    } finally {
      k.transition = v;
    }
  }, M.unstable_act = _, M.useCallback = function(c, v) {
    return ne.current.useCallback(c, v);
  }, M.useContext = function(c) {
    return ne.current.useContext(c);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(c) {
    return ne.current.useDeferredValue(c);
  }, M.useEffect = function(c, v) {
    return ne.current.useEffect(c, v);
  }, M.useId = function() {
    return ne.current.useId();
  }, M.useImperativeHandle = function(c, v, O) {
    return ne.current.useImperativeHandle(c, v, O);
  }, M.useInsertionEffect = function(c, v) {
    return ne.current.useInsertionEffect(c, v);
  }, M.useLayoutEffect = function(c, v) {
    return ne.current.useLayoutEffect(c, v);
  }, M.useMemo = function(c, v) {
    return ne.current.useMemo(c, v);
  }, M.useReducer = function(c, v, O) {
    return ne.current.useReducer(c, v, O);
  }, M.useRef = function(c) {
    return ne.current.useRef(c);
  }, M.useState = function(c) {
    return ne.current.useState(c);
  }, M.useSyncExternalStore = function(c, v, O) {
    return ne.current.useSyncExternalStore(c, v, O);
  }, M.useTransition = function() {
    return ne.current.useTransition();
  }, M.version = "18.3.1", M;
}
var _a;
function Nu() {
  return _a || (_a = 1, _u.exports = Lf()), _u.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function Rf() {
  if (Ca) return yr;
  Ca = 1;
  var L = Nu(), V = Symbol.for("react.element"), m = Symbol.for("react.fragment"), pe = Object.prototype.hasOwnProperty, ye = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ge(re, H, me) {
    var ae, A = {}, G = null, Be = null;
    me !== void 0 && (G = "" + me), H.key !== void 0 && (G = "" + H.key), H.ref !== void 0 && (Be = H.ref);
    for (ae in H) pe.call(H, ae) && !Ce.hasOwnProperty(ae) && (A[ae] = H[ae]);
    if (re && re.defaultProps) for (ae in H = re.defaultProps, H) A[ae] === void 0 && (A[ae] = H[ae]);
    return { $$typeof: V, type: re, key: G, ref: Be, props: A, _owner: ye.current };
  }
  return yr.Fragment = m, yr.jsx = ge, yr.jsxs = ge, yr;
}
Ta.exports = Rf();
var Kn = Ta.exports, Pu = {}, La = { exports: {} }, Fe = {}, Cu = { exports: {} }, xu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xa;
function Of() {
  return xa || (xa = 1, function(L) {
    function V(k, T) {
      var _ = k.length;
      k.push(T);
      e: for (; 0 < _; ) {
        var c = _ - 1 >>> 1, v = k[c];
        if (0 < ye(v, T)) k[c] = T, k[_] = v, _ = c;
        else break e;
      }
    }
    function m(k) {
      return k.length === 0 ? null : k[0];
    }
    function pe(k) {
      if (k.length === 0) return null;
      var T = k[0], _ = k.pop();
      if (_ !== T) {
        k[0] = _;
        e: for (var c = 0, v = k.length, O = v >>> 1; c < O; ) {
          var D = 2 * (c + 1) - 1, I = k[D], j = D + 1, Q = k[j];
          if (0 > ye(I, _)) j < v && 0 > ye(Q, I) ? (k[c] = Q, k[j] = _, c = j) : (k[c] = I, k[D] = _, c = D);
          else if (j < v && 0 > ye(Q, _)) k[c] = Q, k[j] = _, c = j;
          else break e;
        }
      }
      return T;
    }
    function ye(k, T) {
      var _ = k.sortIndex - T.sortIndex;
      return _ !== 0 ? _ : k.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ce = performance;
      L.unstable_now = function() {
        return Ce.now();
      };
    } else {
      var ge = Date, re = ge.now();
      L.unstable_now = function() {
        return ge.now() - re;
      };
    }
    var H = [], me = [], ae = 1, A = null, G = 3, Be = !1, We = !1, Z = !1, $ = typeof setTimeout == "function" ? setTimeout : null, vn = typeof clearTimeout == "function" ? clearTimeout : null, sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Je(k) {
      for (var T = m(me); T !== null; ) {
        if (T.callback === null) pe(me);
        else if (T.startTime <= k) pe(me), T.sortIndex = T.expirationTime, V(H, T);
        else break;
        T = m(me);
      }
    }
    function we(k) {
      if (Z = !1, Je(k), !We) if (m(H) !== null) We = !0, Te(qe);
      else {
        var T = m(me);
        T !== null && ne(we, T.startTime - k);
      }
    }
    function qe(k, T) {
      We = !1, Z && (Z = !1, vn($e), $e = -1), Be = !0;
      var _ = G;
      try {
        for (Je(T), A = m(H); A !== null && (!(A.expirationTime > T) || k && !Yn()); ) {
          var c = A.callback;
          if (typeof c == "function") {
            A.callback = null, G = A.priorityLevel;
            var v = c(A.expirationTime <= T);
            T = L.unstable_now(), typeof v == "function" ? A.callback = v : A === m(H) && pe(H), Je(T);
          } else pe(H);
          A = m(H);
        }
        if (A !== null) var O = !0;
        else {
          var D = m(me);
          D !== null && ne(we, D.startTime - T), O = !1;
        }
        return O;
      } finally {
        A = null, G = _, Be = !1;
      }
    }
    var xe = !1, ze = null, $e = -1, Pn = 5, yn = -1;
    function Yn() {
      return !(L.unstable_now() - yn < Pn);
    }
    function an() {
      if (ze !== null) {
        var k = L.unstable_now();
        yn = k;
        var T = !0;
        try {
          T = ze(!0, k);
        } finally {
          T ? Ie() : (xe = !1, ze = null);
        }
      } else xe = !1;
    }
    var Ie;
    if (typeof sn == "function") Ie = function() {
      sn(an);
    };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), cn = be.port2;
      be.port1.onmessage = an, Ie = function() {
        cn.postMessage(null);
      };
    } else Ie = function() {
      $(an, 0);
    };
    function Te(k) {
      ze = k, xe || (xe = !0, Ie());
    }
    function ne(k, T) {
      $e = $(function() {
        k(L.unstable_now());
      }, T);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, L.unstable_continueExecution = function() {
      We || Be || (We = !0, Te(qe));
    }, L.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pn = 0 < k ? Math.floor(1e3 / k) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, L.unstable_getFirstCallbackNode = function() {
      return m(H);
    }, L.unstable_next = function(k) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = G;
      }
      var _ = G;
      G = T;
      try {
        return k();
      } finally {
        G = _;
      }
    }, L.unstable_pauseExecution = function() {
    }, L.unstable_requestPaint = function() {
    }, L.unstable_runWithPriority = function(k, T) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var _ = G;
      G = k;
      try {
        return T();
      } finally {
        G = _;
      }
    }, L.unstable_scheduleCallback = function(k, T, _) {
      var c = L.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? c + _ : c) : _ = c, k) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = _ + v, k = { id: ae++, callback: T, priorityLevel: k, startTime: _, expirationTime: v, sortIndex: -1 }, _ > c ? (k.sortIndex = _, V(me, k), m(H) === null && k === m(me) && (Z ? (vn($e), $e = -1) : Z = !0, ne(we, _ - c))) : (k.sortIndex = v, V(H, k), We || Be || (We = !0, Te(qe))), k;
    }, L.unstable_shouldYield = Yn, L.unstable_wrapCallback = function(k) {
      var T = G;
      return function() {
        var _ = G;
        G = T;
        try {
          return k.apply(this, arguments);
        } finally {
          G = _;
        }
      };
    };
  }(xu)), xu;
}
var Pa;
function Mf() {
  return Pa || (Pa = 1, Cu.exports = Of()), Cu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Na;
function Df() {
  if (Na) return Fe;
  Na = 1;
  var L = Nu(), V = Mf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var pe = /* @__PURE__ */ new Set(), ye = {};
  function Ce(e, n) {
    ge(e, n), ge(e + "Capture", n);
  }
  function ge(e, n) {
    for (ye[e] = n, e = 0; e < n.length; e++) pe.add(n[e]);
  }
  var re = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), H = Object.prototype.hasOwnProperty, me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ae = {}, A = {};
  function G(e) {
    return H.call(A, e) ? !0 : H.call(ae, e) ? !1 : me.test(e) ? A[e] = !0 : (ae[e] = !0, !1);
  }
  function Be(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function We(e, n, t, r) {
    if (n === null || typeof n > "u" || Be(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null) switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
    return !1;
  }
  function Z(e, n, t, r, l, o, u) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = u;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    $[e] = new Z(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    $[n] = new Z(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    $[e] = new Z(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    $[e] = new Z(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    $[e] = new Z(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    $[e] = new Z(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    $[e] = new Z(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    $[e] = new Z(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    $[e] = new Z(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var vn = /[\-:]([a-z])/g;
  function sn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      vn,
      sn
    );
    $[n] = new Z(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(vn, sn);
    $[n] = new Z(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(vn, sn);
    $[n] = new Z(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    $[e] = new Z(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    $[e] = new Z(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Je(e, n, t, r) {
    var l = $.hasOwnProperty(n) ? $[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (We(n, t, l, r) && (t = null), r || l === null ? G(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var we = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qe = Symbol.for("react.element"), xe = Symbol.for("react.portal"), ze = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), yn = Symbol.for("react.provider"), Yn = Symbol.for("react.context"), an = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), cn = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, c;
  function v(e) {
    if (c === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      c = n && n[1] || "";
    }
    return `
` + c + e;
  }
  var O = !1;
  function D(e, n) {
    if (!e || O) return "";
    O = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n) if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (p) {
          r = p;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; ) i--;
        for (; 1 <= u && 0 <= i; u--, i--) if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1)
            do
              if (u--, i--, 0 > i || l[u] !== o[i]) {
                var s = `
` + l[u].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= u && 0 <= i);
          break;
        }
      }
    } finally {
      O = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function I(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = D(e.type, !1), e;
      case 11:
        return e = D(e.type.render, !1), e;
      case 1:
        return e = D(e.type, !0), e;
      default:
        return "";
    }
  }
  function j(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ze:
        return "Fragment";
      case xe:
        return "Portal";
      case Pn:
        return "Profiler";
      case $e:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Yn:
        return (e.displayName || "Context") + ".Consumer";
      case yn:
        return (e._context.displayName || "Context") + ".Provider";
      case an:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case cn:
        return n = e.displayName || null, n !== null ? n : j(e.type) || "Memo";
      case Te:
        n = e._payload, e = e._init;
        try {
          return j(e(n));
        } catch {
        }
    }
    return null;
  }
  function Q(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return j(n);
      case 8:
        return n === $e ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function B(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function J(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function je(e) {
    var n = J(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, o = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(u) {
        r = "" + u, o.call(this, u);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = je(e));
  }
  function zu(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), r = "";
    return e && (r = J(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function kr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, n) {
    var t = n.checked;
    return _({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Tu(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = B(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Lu(e, n) {
    n = n.checked, n != null && Je(e, "checked", n, !1);
  }
  function Ll(e, n) {
    Lu(e, n);
    var t = B(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Rl(e, n.type, t) : n.hasOwnProperty("defaultValue") && Rl(e, n.type, B(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Ru(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Rl(e, n, t) {
    (n !== "number" || kr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Ot = Array.isArray;
  function it(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + B(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ol(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ou(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(m(92));
        if (Ot(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: B(t) };
  }
  function Mu(e, n) {
    var t = B(n.value), r = B(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Du(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Fu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ml(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Fu(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Sr, Iu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
  function Mt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Dt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Oa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dt).forEach(function(e) {
    Oa.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Dt[n] = Dt[e];
    });
  });
  function ju(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Dt.hasOwnProperty(e) && Dt[e] ? ("" + n).trim() : n + "px";
  }
  function Uu(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = ju(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
  }
  var Ma = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dl(e, n) {
    if (n) {
      if (Ma[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Fl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Il = null;
  function jl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ul = null, st = null, at = null;
  function Au(e) {
    if (e = tr(e)) {
      if (typeof Ul != "function") throw Error(m(280));
      var n = e.stateNode;
      n && (n = $r(n), Ul(e.stateNode, e.type, n));
    }
  }
  function Vu(e) {
    st ? at ? at.push(e) : at = [e] : st = e;
  }
  function Hu() {
    if (st) {
      var e = st, n = at;
      if (at = st = null, Au(e), n) for (e = 0; e < n.length; e++) Au(n[e]);
    }
  }
  function Bu(e, n) {
    return e(n);
  }
  function Wu() {
  }
  var Al = !1;
  function $u(e, n, t) {
    if (Al) return e(n, t);
    Al = !0;
    try {
      return Bu(e, n, t);
    } finally {
      Al = !1, (st !== null || at !== null) && (Wu(), Hu());
    }
  }
  function Ft(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = $r(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Vl = !1;
  if (re) try {
    var It = {};
    Object.defineProperty(It, "passive", { get: function() {
      Vl = !0;
    } }), window.addEventListener("test", It, It), window.removeEventListener("test", It, It);
  } catch {
    Vl = !1;
  }
  function Da(e, n, t, r, l, o, u, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var jt = !1, Er = null, _r = !1, Hl = null, Fa = { onError: function(e) {
    jt = !0, Er = e;
  } };
  function Ia(e, n, t, r, l, o, u, i, s) {
    jt = !1, Er = null, Da.apply(Fa, arguments);
  }
  function ja(e, n, t, r, l, o, u, i, s) {
    if (Ia.apply(this, arguments), jt) {
      if (jt) {
        var p = Er;
        jt = !1, Er = null;
      } else throw Error(m(198));
      _r || (_r = !0, Hl = p);
    }
  }
  function Xn(e) {
    var n = e, t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Qu(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Ku(e) {
    if (Xn(e) !== e) throw Error(m(188));
  }
  function Ua(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Xn(e), n === null) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === t) return Ku(l), e;
          if (o === r) return Ku(l), n;
          o = o.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) t = l, r = o;
      else {
        for (var u = !1, i = l.child; i; ) {
          if (i === t) {
            u = !0, t = l, r = o;
            break;
          }
          if (i === r) {
            u = !0, r = l, t = o;
            break;
          }
          i = i.sibling;
        }
        if (!u) {
          for (i = o.child; i; ) {
            if (i === t) {
              u = !0, t = o, r = l;
              break;
            }
            if (i === r) {
              u = !0, r = o, t = l;
              break;
            }
            i = i.sibling;
          }
          if (!u) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Yu(e) {
    return e = Ua(e), e !== null ? Xu(e) : null;
  }
  function Xu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Xu(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Gu = V.unstable_scheduleCallback, Zu = V.unstable_cancelCallback, Aa = V.unstable_shouldYield, Va = V.unstable_requestPaint, le = V.unstable_now, Ha = V.unstable_getCurrentPriorityLevel, Bl = V.unstable_ImmediatePriority, Ju = V.unstable_UserBlockingPriority, Cr = V.unstable_NormalPriority, Ba = V.unstable_LowPriority, qu = V.unstable_IdlePriority, xr = null, fn = null;
  function Wa(e) {
    if (fn && typeof fn.onCommitFiberRoot == "function") try {
      fn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var en = Math.clz32 ? Math.clz32 : Ka, $a = Math.log, Qa = Math.LN2;
  function Ka(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - ($a(e) / Qa | 0) | 0;
  }
  var Pr = 64, Nr = 4194304;
  function Ut(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = t & 268435455;
    if (u !== 0) {
      var i = u & ~l;
      i !== 0 ? r = Ut(i) : (o &= u, o !== 0 && (r = Ut(o)));
    } else u = t & ~l, u !== 0 ? r = Ut(u) : o !== 0 && (r = Ut(o));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - en(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Ya(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xa(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var u = 31 - en(o), i = 1 << u, s = l[u];
      s === -1 ? (!(i & t) || i & r) && (l[u] = Ya(i, n)) : s <= n && (e.expiredLanes |= i), o &= ~i;
    }
  }
  function Wl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function bu() {
    var e = Pr;
    return Pr <<= 1, !(Pr & 4194240) && (Pr = 64), e;
  }
  function $l(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function At(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - en(n), e[n] = t;
  }
  function Ga(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - en(t), o = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
    }
  }
  function Ql(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - en(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var W = 0;
  function ei(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ni, Kl, ti, ri, li, Yl = !1, Tr = [], Nn = null, zn = null, Tn = null, Vt = /* @__PURE__ */ new Map(), Ht = /* @__PURE__ */ new Map(), Ln = [], Za = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function oi(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Nn = null;
        break;
      case "dragenter":
      case "dragleave":
        zn = null;
        break;
      case "mouseover":
      case "mouseout":
        Tn = null;
        break;
      case "pointerover":
      case "pointerout":
        Vt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ht.delete(n.pointerId);
    }
  }
  function Bt(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = tr(n), n !== null && Kl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function Ja(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return Nn = Bt(Nn, e, n, t, r, l), !0;
      case "dragenter":
        return zn = Bt(zn, e, n, t, r, l), !0;
      case "mouseover":
        return Tn = Bt(Tn, e, n, t, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return Vt.set(o, Bt(Vt.get(o) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Ht.set(o, Bt(Ht.get(o) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function ui(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Qu(t), n !== null) {
            e.blockedOn = n, li(e.priority, function() {
              ti(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Gl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Il = r, t.target.dispatchEvent(r), Il = null;
      } else return n = tr(t), n !== null && Kl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function ii(e, n, t) {
    Lr(e) && t.delete(n);
  }
  function qa() {
    Yl = !1, Nn !== null && Lr(Nn) && (Nn = null), zn !== null && Lr(zn) && (zn = null), Tn !== null && Lr(Tn) && (Tn = null), Vt.forEach(ii), Ht.forEach(ii);
  }
  function Wt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Yl || (Yl = !0, V.unstable_scheduleCallback(V.unstable_NormalPriority, qa)));
  }
  function $t(e) {
    function n(l) {
      return Wt(l, e);
    }
    if (0 < Tr.length) {
      Wt(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Nn !== null && Wt(Nn, e), zn !== null && Wt(zn, e), Tn !== null && Wt(Tn, e), Vt.forEach(n), Ht.forEach(n), t = 0; t < Ln.length; t++) r = Ln[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ln.length && (t = Ln[0], t.blockedOn === null); ) ui(t), t.blockedOn === null && Ln.shift();
  }
  var ct = we.ReactCurrentBatchConfig, Rr = !0;
  function ba(e, n, t, r) {
    var l = W, o = ct.transition;
    ct.transition = null;
    try {
      W = 1, Xl(e, n, t, r);
    } finally {
      W = l, ct.transition = o;
    }
  }
  function ec(e, n, t, r) {
    var l = W, o = ct.transition;
    ct.transition = null;
    try {
      W = 4, Xl(e, n, t, r);
    } finally {
      W = l, ct.transition = o;
    }
  }
  function Xl(e, n, t, r) {
    if (Rr) {
      var l = Gl(e, n, t, r);
      if (l === null) po(e, n, r, Or, t), oi(e, r);
      else if (Ja(l, e, n, t, r)) r.stopPropagation();
      else if (oi(e, r), n & 4 && -1 < Za.indexOf(e)) {
        for (; l !== null; ) {
          var o = tr(l);
          if (o !== null && ni(o), o = Gl(e, n, t, r), o === null && po(e, n, r, Or, t), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else po(e, n, r, null, t);
    }
  }
  var Or = null;
  function Gl(e, n, t, r) {
    if (Or = null, e = jl(r), e = Gn(e), e !== null) if (n = Xn(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Qu(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return Or = e, null;
  }
  function si(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ha()) {
          case Bl:
            return 1;
          case Ju:
            return 4;
          case Cr:
          case Ba:
            return 16;
          case qu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rn = null, Zl = null, Mr = null;
  function ai() {
    if (Mr) return Mr;
    var e, n = Zl, t = n.length, r, l = "value" in Rn ? Rn.value : Rn.textContent, o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++) ;
    var u = t - e;
    for (r = 1; r <= u && n[t - r] === l[o - r]; r++) ;
    return Mr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Dr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Fr() {
    return !0;
  }
  function ci() {
    return !1;
  }
  function Ue(e) {
    function n(t, r, l, o, u) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Fr : ci, this.isPropagationStopped = ci, this;
    }
    return _(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Fr);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Fr);
    }, persist: function() {
    }, isPersistent: Fr }), n;
  }
  var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Jl = Ue(ft), Qt = _({}, ft, { view: 0, detail: 0 }), nc = Ue(Qt), ql, bl, Kt, Ir = _({}, Qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: no, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Kt && (Kt && e.type === "mousemove" ? (ql = e.screenX - Kt.screenX, bl = e.screenY - Kt.screenY) : bl = ql = 0, Kt = e), ql);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : bl;
  } }), fi = Ue(Ir), tc = _({}, Ir, { dataTransfer: 0 }), rc = Ue(tc), lc = _({}, Qt, { relatedTarget: 0 }), eo = Ue(lc), oc = _({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uc = Ue(oc), ic = _({}, ft, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), sc = Ue(ic), ac = _({}, ft, { data: 0 }), di = Ue(ac), cc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, fc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, dc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function pc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = dc[e]) ? !!n[e] : !1;
  }
  function no() {
    return pc;
  }
  var mc = _({}, Qt, { key: function(e) {
    if (e.key) {
      var n = cc[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: no, charCode: function(e) {
    return e.type === "keypress" ? Dr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), hc = Ue(mc), vc = _({}, Ir, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pi = Ue(vc), yc = _({}, Qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: no }), gc = Ue(yc), wc = _({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), kc = Ue(wc), Sc = _({}, Ir, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ec = Ue(Sc), _c = [9, 13, 27, 32], to = re && "CompositionEvent" in window, Yt = null;
  re && "documentMode" in document && (Yt = document.documentMode);
  var Cc = re && "TextEvent" in window && !Yt, mi = re && (!to || Yt && 8 < Yt && 11 >= Yt), hi = " ", vi = !1;
  function yi(e, n) {
    switch (e) {
      case "keyup":
        return _c.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function gi(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function xc(e, n) {
    switch (e) {
      case "compositionend":
        return gi(n);
      case "keypress":
        return n.which !== 32 ? null : (vi = !0, hi);
      case "textInput":
        return e = n.data, e === hi && vi ? null : e;
      default:
        return null;
    }
  }
  function Pc(e, n) {
    if (dt) return e === "compositionend" || !to && yi(e, n) ? (e = ai(), Mr = Zl = Rn = null, dt = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return mi && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Nc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function wi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Nc[e.type] : n === "textarea";
  }
  function ki(e, n, t, r) {
    Vu(r), n = Hr(n, "onChange"), 0 < n.length && (t = new Jl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Xt = null, Gt = null;
  function zc(e) {
    Ui(e, 0);
  }
  function jr(e) {
    var n = yt(e);
    if (zu(n)) return e;
  }
  function Tc(e, n) {
    if (e === "change") return n;
  }
  var Si = !1;
  if (re) {
    var ro;
    if (re) {
      var lo = "oninput" in document;
      if (!lo) {
        var Ei = document.createElement("div");
        Ei.setAttribute("oninput", "return;"), lo = typeof Ei.oninput == "function";
      }
      ro = lo;
    } else ro = !1;
    Si = ro && (!document.documentMode || 9 < document.documentMode);
  }
  function _i() {
    Xt && (Xt.detachEvent("onpropertychange", Ci), Gt = Xt = null);
  }
  function Ci(e) {
    if (e.propertyName === "value" && jr(Gt)) {
      var n = [];
      ki(n, Gt, e, jl(e)), $u(zc, n);
    }
  }
  function Lc(e, n, t) {
    e === "focusin" ? (_i(), Xt = n, Gt = t, Xt.attachEvent("onpropertychange", Ci)) : e === "focusout" && _i();
  }
  function Rc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return jr(Gt);
  }
  function Oc(e, n) {
    if (e === "click") return jr(n);
  }
  function Mc(e, n) {
    if (e === "input" || e === "change") return jr(n);
  }
  function Dc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var nn = typeof Object.is == "function" ? Object.is : Dc;
  function Zt(e, n) {
    if (nn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!H.call(n, l) || !nn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function xi(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pi(e, n) {
    var t = xi(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = xi(t);
    }
  }
  function Ni(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ni(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function zi() {
    for (var e = window, n = kr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = kr(e.document);
    }
    return n;
  }
  function oo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Fc(e) {
    var n = zi(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Ni(t.ownerDocument.documentElement, t)) {
      if (r !== null && oo(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Pi(t, o);
          var u = Pi(
            t,
            r
          );
          l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(u.node, u.offset)) : (n.setEnd(u.node, u.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ic = re && "documentMode" in document && 11 >= document.documentMode, pt = null, uo = null, Jt = null, io = !1;
  function Ti(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    io || pt == null || pt !== kr(r) || (r = pt, "selectionStart" in r && oo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Zt(Jt, r) || (Jt = r, r = Hr(uo, "onSelect"), 0 < r.length && (n = new Jl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = pt)));
  }
  function Ur(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var mt = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, so = {}, Li = {};
  re && (Li = document.createElement("div").style, "AnimationEvent" in window || (delete mt.animationend.animation, delete mt.animationiteration.animation, delete mt.animationstart.animation), "TransitionEvent" in window || delete mt.transitionend.transition);
  function Ar(e) {
    if (so[e]) return so[e];
    if (!mt[e]) return e;
    var n = mt[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in Li) return so[e] = n[t];
    return e;
  }
  var Ri = Ar("animationend"), Oi = Ar("animationiteration"), Mi = Ar("animationstart"), Di = Ar("transitionend"), Fi = /* @__PURE__ */ new Map(), Ii = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function On(e, n) {
    Fi.set(e, n), Ce(n, [e]);
  }
  for (var ao = 0; ao < Ii.length; ao++) {
    var co = Ii[ao], jc = co.toLowerCase(), Uc = co[0].toUpperCase() + co.slice(1);
    On(jc, "on" + Uc);
  }
  On(Ri, "onAnimationEnd"), On(Oi, "onAnimationIteration"), On(Mi, "onAnimationStart"), On("dblclick", "onDoubleClick"), On("focusin", "onFocus"), On("focusout", "onBlur"), On(Di, "onTransitionEnd"), ge("onMouseEnter", ["mouseout", "mouseover"]), ge("onMouseLeave", ["mouseout", "mouseover"]), ge("onPointerEnter", ["pointerout", "pointerover"]), ge("onPointerLeave", ["pointerout", "pointerover"]), Ce("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ce("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ce("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ce("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ce("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ce("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ac = new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));
  function ji(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, ja(r, n, void 0, e), e.currentTarget = null;
  }
  function Ui(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n) for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u], s = i.instance, p = i.currentTarget;
          if (i = i.listener, s !== o && l.isPropagationStopped()) break e;
          ji(l, i, p), o = s;
        }
        else for (u = 0; u < r.length; u++) {
          if (i = r[u], s = i.instance, p = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped()) break e;
          ji(l, i, p), o = s;
        }
      }
    }
    if (_r) throw e = Hl, _r = !1, Hl = null, e;
  }
  function Y(e, n) {
    var t = n[wo];
    t === void 0 && (t = n[wo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Ai(n, e, 2, !1), t.add(r));
  }
  function fo(e, n, t) {
    var r = 0;
    n && (r |= 4), Ai(t, e, r, n);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function bt(e) {
    if (!e[Vr]) {
      e[Vr] = !0, pe.forEach(function(t) {
        t !== "selectionchange" && (Ac.has(t) || fo(t, !1, e), fo(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Vr] || (n[Vr] = !0, fo("selectionchange", !1, n));
    }
  }
  function Ai(e, n, t, r) {
    switch (si(n)) {
      case 1:
        var l = ba;
        break;
      case 4:
        l = ec;
        break;
      default:
        l = Xl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Vl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function po(e, n, t, r, l) {
    var o = r;
    if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || i.nodeType === 8 && i.parentNode === l) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var s = u.tag;
          if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          u = u.return;
        }
        for (; i !== null; ) {
          if (u = Gn(i), u === null) return;
          if (s = u.tag, s === 5 || s === 6) {
            r = o = u;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    $u(function() {
      var p = o, y = jl(t), g = [];
      e: {
        var h = Fi.get(e);
        if (h !== void 0) {
          var S = Jl, C = e;
          switch (e) {
            case "keypress":
              if (Dr(t) === 0) break e;
            case "keydown":
            case "keyup":
              S = hc;
              break;
            case "focusin":
              C = "focus", S = eo;
              break;
            case "focusout":
              C = "blur", S = eo;
              break;
            case "beforeblur":
            case "afterblur":
              S = eo;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = fi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = rc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = gc;
              break;
            case Ri:
            case Oi:
            case Mi:
              S = uc;
              break;
            case Di:
              S = kc;
              break;
            case "scroll":
              S = nc;
              break;
            case "wheel":
              S = Ec;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = sc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = pi;
          }
          var x = (n & 4) !== 0, oe = !x && e === "scroll", f = x ? h !== null ? h + "Capture" : null : h;
          x = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Ft(a, f), w != null && x.push(er(a, w, d)))), oe) break;
            a = a.return;
          }
          0 < x.length && (h = new S(h, C, null, t, y), g.push({ event: h, listeners: x }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", h && t !== Il && (C = t.relatedTarget || t.fromElement) && (Gn(C) || C[gn])) break e;
          if ((S || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (C = t.relatedTarget || t.toElement, S = p, C = C ? Gn(C) : null, C !== null && (oe = Xn(C), C !== oe || C.tag !== 5 && C.tag !== 6) && (C = null)) : (S = null, C = p), S !== C)) {
            if (x = fi, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (x = pi, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), oe = S == null ? h : yt(S), d = C == null ? h : yt(C), h = new x(w, a + "leave", S, t, y), h.target = oe, h.relatedTarget = d, w = null, Gn(y) === p && (x = new x(f, a + "enter", C, t, y), x.target = d, x.relatedTarget = oe, w = x), oe = w, S && C) n: {
              for (x = S, f = C, a = 0, d = x; d; d = ht(d)) a++;
              for (d = 0, w = f; w; w = ht(w)) d++;
              for (; 0 < a - d; ) x = ht(x), a--;
              for (; 0 < d - a; ) f = ht(f), d--;
              for (; a--; ) {
                if (x === f || f !== null && x === f.alternate) break n;
                x = ht(x), f = ht(f);
              }
              x = null;
            }
            else x = null;
            S !== null && Vi(g, h, S, x, !1), C !== null && oe !== null && Vi(g, oe, C, x, !0);
          }
        }
        e: {
          if (h = p ? yt(p) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file") var P = Tc;
          else if (wi(h)) if (Si) P = Mc;
          else {
            P = Rc;
            var N = Lc;
          }
          else (S = h.nodeName) && S.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Oc);
          if (P && (P = P(e, p))) {
            ki(g, P, t, y);
            break e;
          }
          N && N(e, h, p), e === "focusout" && (N = h._wrapperState) && N.controlled && h.type === "number" && Rl(h, "number", h.value);
        }
        switch (N = p ? yt(p) : window, e) {
          case "focusin":
            (wi(N) || N.contentEditable === "true") && (pt = N, uo = p, Jt = null);
            break;
          case "focusout":
            Jt = uo = pt = null;
            break;
          case "mousedown":
            io = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            io = !1, Ti(g, t, y);
            break;
          case "selectionchange":
            if (Ic) break;
          case "keydown":
          case "keyup":
            Ti(g, t, y);
        }
        var z;
        if (to) e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
        else dt ? yi(e, t) && (R = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (R = "onCompositionStart");
        R && (mi && t.locale !== "ko" && (dt || R !== "onCompositionStart" ? R === "onCompositionEnd" && dt && (z = ai()) : (Rn = y, Zl = "value" in Rn ? Rn.value : Rn.textContent, dt = !0)), N = Hr(p, R), 0 < N.length && (R = new di(R, e, null, t, y), g.push({ event: R, listeners: N }), z ? R.data = z : (z = gi(t), z !== null && (R.data = z)))), (z = Cc ? xc(e, t) : Pc(e, t)) && (p = Hr(p, "onBeforeInput"), 0 < p.length && (y = new di("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = z));
      }
      Ui(g, n);
    });
  }
  function er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Hr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Ft(e, t), o != null && r.unshift(er(e, o, l)), o = Ft(e, n), o != null && r.push(er(e, o, l))), e = e.return;
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Vi(e, n, t, r, l) {
    for (var o = n._reactName, u = []; t !== null && t !== r; ) {
      var i = t, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Ft(t, o), s != null && u.unshift(er(t, s, i))) : l || (s = Ft(t, o), s != null && u.push(er(t, s, i)))), t = t.return;
    }
    u.length !== 0 && e.push({ event: n, listeners: u });
  }
  var Vc = /\r\n?/g, Hc = /\u0000|\uFFFD/g;
  function Hi(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vc, `
`).replace(Hc, "");
  }
  function Br(e, n, t) {
    if (n = Hi(n), Hi(e) !== n && t) throw Error(m(425));
  }
  function Wr() {
  }
  var mo = null, ho = null;
  function vo(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0, Bc = typeof clearTimeout == "function" ? clearTimeout : void 0, Bi = typeof Promise == "function" ? Promise : void 0, Wc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bi < "u" ? function(e) {
    return Bi.resolve(null).then(e).catch($c);
  } : yo;
  function $c(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function go(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), $t(n);
          return;
        }
        r--;
      } else t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    $t(n);
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Wi(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vt = Math.random().toString(36).slice(2), dn = "__reactFiber$" + vt, nr = "__reactProps$" + vt, gn = "__reactContainer$" + vt, wo = "__reactEvents$" + vt, Qc = "__reactListeners$" + vt, Kc = "__reactHandles$" + vt;
  function Gn(e) {
    var n = e[dn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[gn] || t[dn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Wi(e); e !== null; ) {
          if (t = e[dn]) return t;
          e = Wi(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function tr(e) {
    return e = e[dn] || e[gn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function $r(e) {
    return e[nr] || null;
  }
  var ko = [], gt = -1;
  function Dn(e) {
    return { current: e };
  }
  function X(e) {
    0 > gt || (e.current = ko[gt], ko[gt] = null, gt--);
  }
  function K(e, n) {
    gt++, ko[gt] = e.current, e.current = n;
  }
  var Fn = {}, ke = Dn(Fn), Le = Dn(!1), Zn = Fn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in t) l[o] = n[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Re(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    X(Le), X(ke);
  }
  function $i(e, n, t) {
    if (ke.current !== Fn) throw Error(m(168));
    K(ke, n), K(Le, t);
  }
  function Qi(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, Q(e) || "Unknown", l));
    return _({}, t, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, Zn = ke.current, K(ke, e), K(Le, Le.current), !0;
  }
  function Ki(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = Qi(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, X(Le), X(ke), K(ke, e)) : X(Le), K(Le, t);
  }
  var wn = null, Yr = !1, So = !1;
  function Yi(e) {
    wn === null ? wn = [e] : wn.push(e);
  }
  function Yc(e) {
    Yr = !0, Yi(e);
  }
  function In() {
    if (!So && wn !== null) {
      So = !0;
      var e = 0, n = W;
      try {
        var t = wn;
        for (W = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        wn = null, Yr = !1;
      } catch (l) {
        throw wn !== null && (wn = wn.slice(e + 1)), Gu(Bl, In), l;
      } finally {
        W = n, So = !1;
      }
    }
    return null;
  }
  var kt = [], St = 0, Xr = null, Gr = 0, Qe = [], Ke = 0, Jn = null, kn = 1, Sn = "";
  function qn(e, n) {
    kt[St++] = Gr, kt[St++] = Xr, Xr = e, Gr = n;
  }
  function Xi(e, n, t) {
    Qe[Ke++] = kn, Qe[Ke++] = Sn, Qe[Ke++] = Jn, Jn = e;
    var r = kn;
    e = Sn;
    var l = 32 - en(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - en(n) + l;
    if (30 < o) {
      var u = l - l % 5;
      o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, kn = 1 << 32 - en(n) + l | t << l | r, Sn = o + e;
    } else kn = 1 << o | t << l | r, Sn = e;
  }
  function Eo(e) {
    e.return !== null && (qn(e, 1), Xi(e, 1, 0));
  }
  function _o(e) {
    for (; e === Xr; ) Xr = kt[--St], kt[St] = null, Gr = kt[--St], kt[St] = null;
    for (; e === Jn; ) Jn = Qe[--Ke], Qe[Ke] = null, Sn = Qe[--Ke], Qe[Ke] = null, kn = Qe[--Ke], Qe[Ke] = null;
  }
  var Ae = null, Ve = null, q = !1, tn = null;
  function Gi(e, n) {
    var t = Ze(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Zi(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = Mn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: kn, overflow: Sn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ze(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ae = e, Ve = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Co(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function xo(e) {
    if (q) {
      var n = Ve;
      if (n) {
        var t = n;
        if (!Zi(e, n)) {
          if (Co(e)) throw Error(m(418));
          n = Mn(t.nextSibling);
          var r = Ae;
          n && Zi(e, n) ? Gi(r, t) : (e.flags = e.flags & -4097 | 2, q = !1, Ae = e);
        }
      } else {
        if (Co(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, q = !1, Ae = e;
      }
    }
  }
  function Ji(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ae = e;
  }
  function Zr(e) {
    if (e !== Ae) return !1;
    if (!q) return Ji(e), q = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !vo(e.type, e.memoizedProps)), n && (n = Ve)) {
      if (Co(e)) throw qi(), Error(m(418));
      for (; n; ) Gi(e, n), n = Mn(n.nextSibling);
    }
    if (Ji(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ve = Mn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = Ae ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function qi() {
    for (var e = Ve; e; ) e = Mn(e.nextSibling);
  }
  function Et() {
    Ve = Ae = null, q = !1;
  }
  function Po(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  var Xc = we.ReactCurrentBatchConfig;
  function rr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, o = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(u) {
          var i = l.refs;
          u === null ? delete i[o] : i[o] = u;
        }, n._stringRef = o, n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function bi(e) {
    var n = e._init;
    return n(e._payload);
  }
  function es(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = $n(f, a), f.index = 0, f.sibling = null, f;
    }
    function o(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function u(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = yu(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === ze ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Te && bi(P) === a.type) ? (w = l(a, d.props), w.ref = rr(f, a, d), w.return = f, w) : (w = Sl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = gu(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, P) {
      return a === null || a.tag !== 7 ? (a = ut(d, f.mode, w, P), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = yu("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case qe:
            return d = Sl(a.type, a.key, a.props, null, f.mode, d), d.ref = rr(f, null, a), d.return = f, d;
          case xe:
            return a = gu(a, f.mode, d), a.return = f, a;
          case Te:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Ot(a) || T(a)) return a = ut(a, f.mode, d, null), a.return = f, a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return P !== null ? null : i(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            return d.key === P ? s(f, a, d, w) : null;
          case xe:
            return d.key === P ? p(f, a, d, w) : null;
          case Te:
            return P = d._init, h(
              f,
              a,
              P(d._payload),
              w
            );
        }
        if (Ot(d) || T(d)) return P !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function S(f, a, d, w, P) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, i(a, f, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case qe:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, P);
          case xe:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, P);
          case Te:
            var N = w._init;
            return S(f, a, d, N(w._payload), P);
        }
        if (Ot(w) || T(w)) return f = f.get(d) || null, y(a, f, w, P, null);
        Jr(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (var P = null, N = null, z = a, R = a = 0, de = null; z !== null && R < d.length; R++) {
        z.index > R ? (de = z, z = null) : de = z.sibling;
        var U = h(f, z, d[R], w);
        if (U === null) {
          z === null && (z = de);
          break;
        }
        e && z && U.alternate === null && n(f, z), a = o(U, a, R), N === null ? P = U : N.sibling = U, N = U, z = de;
      }
      if (R === d.length) return t(f, z), q && qn(f, R), P;
      if (z === null) {
        for (; R < d.length; R++) z = g(f, d[R], w), z !== null && (a = o(z, a, R), N === null ? P = z : N.sibling = z, N = z);
        return q && qn(f, R), P;
      }
      for (z = r(f, z); R < d.length; R++) de = S(z, f, R, d[R], w), de !== null && (e && de.alternate !== null && z.delete(de.key === null ? R : de.key), a = o(de, a, R), N === null ? P = de : N.sibling = de, N = de);
      return e && z.forEach(function(Qn) {
        return n(f, Qn);
      }), q && qn(f, R), P;
    }
    function x(f, a, d, w) {
      var P = T(d);
      if (typeof P != "function") throw Error(m(150));
      if (d = P.call(d), d == null) throw Error(m(151));
      for (var N = P = null, z = a, R = a = 0, de = null, U = d.next(); z !== null && !U.done; R++, U = d.next()) {
        z.index > R ? (de = z, z = null) : de = z.sibling;
        var Qn = h(f, z, U.value, w);
        if (Qn === null) {
          z === null && (z = de);
          break;
        }
        e && z && Qn.alternate === null && n(f, z), a = o(Qn, a, R), N === null ? P = Qn : N.sibling = Qn, N = Qn, z = de;
      }
      if (U.done) return t(
        f,
        z
      ), q && qn(f, R), P;
      if (z === null) {
        for (; !U.done; R++, U = d.next()) U = g(f, U.value, w), U !== null && (a = o(U, a, R), N === null ? P = U : N.sibling = U, N = U);
        return q && qn(f, R), P;
      }
      for (z = r(f, z); !U.done; R++, U = d.next()) U = S(z, f, R, U.value, w), U !== null && (e && U.alternate !== null && z.delete(U.key === null ? R : U.key), a = o(U, a, R), N === null ? P = U : N.sibling = U, N = U);
      return e && z.forEach(function(zf) {
        return n(f, zf);
      }), q && qn(f, R), P;
    }
    function oe(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === ze && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            e: {
              for (var P = d.key, N = a; N !== null; ) {
                if (N.key === P) {
                  if (P = d.type, P === ze) {
                    if (N.tag === 7) {
                      t(f, N.sibling), a = l(N, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (N.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Te && bi(P) === N.type) {
                    t(f, N.sibling), a = l(N, d.props), a.ref = rr(f, N, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, N);
                  break;
                } else n(f, N);
                N = N.sibling;
              }
              d.type === ze ? (a = ut(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = Sl(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, a, d), w.return = f, f = w);
            }
            return u(f);
          case xe:
            e: {
              for (N = d.key; a !== null; ) {
                if (a.key === N) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
                else n(f, a);
                a = a.sibling;
              }
              a = gu(d, f.mode, w), a.return = f, f = a;
            }
            return u(f);
          case Te:
            return N = d._init, oe(f, a, N(d._payload), w);
        }
        if (Ot(d)) return C(f, a, d, w);
        if (T(d)) return x(f, a, d, w);
        Jr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = yu(d, f.mode, w), a.return = f, f = a), u(f)) : t(f, a);
    }
    return oe;
  }
  var _t = es(!0), ns = es(!1), qr = Dn(null), br = null, Ct = null, No = null;
  function zo() {
    No = Ct = br = null;
  }
  function To(e) {
    var n = qr.current;
    X(qr), e._currentValue = n;
  }
  function Lo(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function xt(e, n) {
    br = e, No = Ct = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Oe = !0), e.firstContext = null);
  }
  function Ye(e) {
    var n = e._currentValue;
    if (No !== e) if (e = { context: e, memoizedValue: n, next: null }, Ct === null) {
      if (br === null) throw Error(m(308));
      Ct = e, br.dependencies = { lanes: 0, firstContext: e };
    } else Ct = Ct.next = e;
    return n;
  }
  var bn = null;
  function Ro(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function ts(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Ro(n)) : (t.next = l.next, l.next = t), n.interleaved = t, En(e, r);
  }
  function En(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var jn = !1;
  function Oo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function rs(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function _n(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, F & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, En(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Ro(r)) : (n.next = l.next, l.next = n), r.interleaved = n, En(e, t);
  }
  function el(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Ql(e, t);
    }
  }
  function ls(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, o = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var u = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          o === null ? l = o = u : o = o.next = u, t = t.next;
        } while (t !== null);
        o === null ? l = o = n : o = o.next = n;
      } else l = o = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function nl(e, n, t, r) {
    var l = e.updateQueue;
    jn = !1;
    var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, u === null ? o = p : u.next = p, u = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== u && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (o !== null) {
      var g = l.baseState;
      u = 0, y = p = s = null, i = o;
      do {
        var h = i.lane, S = i.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: S,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var C = e, x = i;
            switch (h = n, S = t, x.tag) {
              case 1:
                if (C = x.payload, typeof C == "function") {
                  g = C.call(S, g, h);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = x.payload, h = typeof C == "function" ? C.call(S, g, h) : C, h == null) break e;
                g = _({}, g, h);
                break e;
              case 2:
                jn = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [i] : h.push(i));
        } else S = { eventTime: S, lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = S, s = g) : y = y.next = S, u |= h;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          h = i, i = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          u |= l.lane, l = l.next;
        while (l !== n);
      } else o === null && (l.shared.lanes = 0);
      tt |= u, e.lanes = u, e.memoizedState = g;
    }
  }
  function os(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var lr = {}, pn = Dn(lr), or = Dn(lr), ur = Dn(lr);
  function et(e) {
    if (e === lr) throw Error(m(174));
    return e;
  }
  function Mo(e, n) {
    switch (K(ur, n), K(or, e), K(pn, lr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ml(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ml(n, e);
    }
    X(pn), K(pn, n);
  }
  function Pt() {
    X(pn), X(or), X(ur);
  }
  function us(e) {
    et(ur.current);
    var n = et(pn.current), t = Ml(n, e.type);
    n !== t && (K(or, e), K(pn, t));
  }
  function Do(e) {
    or.current === e && (X(pn), X(or));
  }
  var b = Dn(0);
  function tl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Fo = [];
  function Io() {
    for (var e = 0; e < Fo.length; e++) Fo[e]._workInProgressVersionPrimary = null;
    Fo.length = 0;
  }
  var rl = we.ReactCurrentDispatcher, jo = we.ReactCurrentBatchConfig, nt = 0, ee = null, ie = null, ce = null, ll = !1, ir = !1, sr = 0, Gc = 0;
  function Se() {
    throw Error(m(321));
  }
  function Uo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!nn(e[t], n[t])) return !1;
    return !0;
  }
  function Ao(e, n, t, r, l, o) {
    if (nt = o, ee = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, rl.current = e === null || e.memoizedState === null ? bc : ef, e = t(r, l), ir) {
      o = 0;
      do {
        if (ir = !1, sr = 0, 25 <= o) throw Error(m(301));
        o += 1, ce = ie = null, n.updateQueue = null, rl.current = nf, e = t(r, l);
      } while (ir);
    }
    if (rl.current = il, n = ie !== null && ie.next !== null, nt = 0, ce = ie = ee = null, ll = !1, n) throw Error(m(300));
    return e;
  }
  function Vo() {
    var e = sr !== 0;
    return sr = 0, e;
  }
  function mn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ce === null ? ee.memoizedState = ce = e : ce = ce.next = e, ce;
  }
  function Xe() {
    if (ie === null) {
      var e = ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ie.next;
    var n = ce === null ? ee.memoizedState : ce.next;
    if (n !== null) ce = n, ie = e;
    else {
      if (e === null) throw Error(m(310));
      ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, ce === null ? ee.memoizedState = ce = e : ce = ce.next = e;
    }
    return ce;
  }
  function ar(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = Xe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = ie, l = r.baseQueue, o = t.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = o.next, o.next = u;
      }
      r.baseQueue = l = o, t.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var i = u = null, s = null, p = o;
      do {
        var y = p.lane;
        if ((nt & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, u = r) : s = s.next = g, ee.lanes |= y, tt |= y;
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? u = r : s.next = i, nn(r, n.memoizedState) || (Oe = !0), n.memoizedState = r, n.baseState = u, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, ee.lanes |= o, tt |= o, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Bo(e) {
    var n = Xe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var u = l = l.next;
      do
        o = e(o, u.action), u = u.next;
      while (u !== l);
      nn(o, n.memoizedState) || (Oe = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
    }
    return [o, r];
  }
  function is() {
  }
  function ss(e, n) {
    var t = ee, r = Xe(), l = n(), o = !nn(r.memoizedState, l);
    if (o && (r.memoizedState = l, Oe = !0), r = r.queue, Wo(fs.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || ce !== null && ce.memoizedState.tag & 1) {
      if (t.flags |= 2048, cr(9, cs.bind(null, t, r, l, n), void 0, null), fe === null) throw Error(m(349));
      nt & 30 || as(t, n, l);
    }
    return l;
  }
  function as(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function cs(e, n, t, r) {
    n.value = t, n.getSnapshot = r, ds(n) && ps(e);
  }
  function fs(e, n, t) {
    return t(function() {
      ds(n) && ps(e);
    });
  }
  function ds(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !nn(e, t);
    } catch {
      return !0;
    }
  }
  function ps(e) {
    var n = En(e, 1);
    n !== null && un(n, e, 1, -1);
  }
  function ms(e) {
    var n = mn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, n.queue = e, e = e.dispatch = qc.bind(null, ee, e), [n.memoizedState, e];
  }
  function cr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function hs() {
    return Xe().memoizedState;
  }
  function ol(e, n, t, r) {
    var l = mn();
    ee.flags |= e, l.memoizedState = cr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function ul(e, n, t, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ie !== null) {
      var u = ie.memoizedState;
      if (o = u.destroy, r !== null && Uo(r, u.deps)) {
        l.memoizedState = cr(n, t, o, r);
        return;
      }
    }
    ee.flags |= e, l.memoizedState = cr(1 | n, t, o, r);
  }
  function vs(e, n) {
    return ol(8390656, 8, e, n);
  }
  function Wo(e, n) {
    return ul(2048, 8, e, n);
  }
  function ys(e, n) {
    return ul(4, 2, e, n);
  }
  function gs(e, n) {
    return ul(4, 4, e, n);
  }
  function ws(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function ks(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ul(4, 4, ws.bind(null, n, e), t);
  }
  function $o() {
  }
  function Ss(e, n) {
    var t = Xe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uo(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Es(e, n) {
    var t = Xe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uo(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function _s(e, n, t) {
    return nt & 21 ? (nn(t, n) || (t = bu(), ee.lanes |= t, tt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = t);
  }
  function Zc(e, n) {
    var t = W;
    W = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = jo.transition;
    jo.transition = {};
    try {
      e(!1), n();
    } finally {
      W = t, jo.transition = r;
    }
  }
  function Cs() {
    return Xe().memoizedState;
  }
  function Jc(e, n, t) {
    var r = Bn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, xs(e)) Ps(n, t);
    else if (t = ts(e, n, t, r), t !== null) {
      var l = Ne();
      un(t, e, r, l), Ns(t, n, r);
    }
  }
  function qc(e, n, t) {
    var r = Bn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (xs(e)) Ps(n, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
        var u = n.lastRenderedState, i = o(u, t);
        if (l.hasEagerState = !0, l.eagerState = i, nn(i, u)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Ro(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = ts(e, n, l, r), t !== null && (l = Ne(), un(t, e, r, l), Ns(t, n, r));
    }
  }
  function xs(e) {
    var n = e.alternate;
    return e === ee || n !== null && n === ee;
  }
  function Ps(e, n) {
    ir = ll = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Ns(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Ql(e, t);
    }
  }
  var il = { readContext: Ye, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, bc = { readContext: Ye, useCallback: function(e, n) {
    return mn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Ye, useEffect: vs, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ol(
      4194308,
      4,
      ws.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ol(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ol(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = mn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = mn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Jc.bind(null, ee, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = mn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: ms, useDebugValue: $o, useDeferredValue: function(e) {
    return mn().memoizedState = e;
  }, useTransition: function() {
    var e = ms(!1), n = e[0];
    return e = Zc.bind(null, e[1]), mn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = ee, l = mn();
    if (q) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), fe === null) throw Error(m(349));
      nt & 30 || as(r, n, t);
    }
    l.memoizedState = t;
    var o = { value: t, getSnapshot: n };
    return l.queue = o, vs(fs.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, cr(9, cs.bind(null, r, o, t, n), void 0, null), t;
  }, useId: function() {
    var e = mn(), n = fe.identifierPrefix;
    if (q) {
      var t = Sn, r = kn;
      t = (r & ~(1 << 32 - en(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = sr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = Gc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, ef = {
    readContext: Ye,
    useCallback: Ss,
    useContext: Ye,
    useEffect: Wo,
    useImperativeHandle: ks,
    useInsertionEffect: ys,
    useLayoutEffect: gs,
    useMemo: Es,
    useReducer: Ho,
    useRef: hs,
    useState: function() {
      return Ho(ar);
    },
    useDebugValue: $o,
    useDeferredValue: function(e) {
      var n = Xe();
      return _s(n, ie.memoizedState, e);
    },
    useTransition: function() {
      var e = Ho(ar)[0], n = Xe().memoizedState;
      return [e, n];
    },
    useMutableSource: is,
    useSyncExternalStore: ss,
    useId: Cs,
    unstable_isNewReconciler: !1
  }, nf = { readContext: Ye, useCallback: Ss, useContext: Ye, useEffect: Wo, useImperativeHandle: ks, useInsertionEffect: ys, useLayoutEffect: gs, useMemo: Es, useReducer: Bo, useRef: hs, useState: function() {
    return Bo(ar);
  }, useDebugValue: $o, useDeferredValue: function(e) {
    var n = Xe();
    return ie === null ? n.memoizedState = e : _s(n, ie.memoizedState, e);
  }, useTransition: function() {
    var e = Bo(ar)[0], n = Xe().memoizedState;
    return [e, n];
  }, useMutableSource: is, useSyncExternalStore: ss, useId: Cs, unstable_isNewReconciler: !1 };
  function rn(e, n) {
    if (e && e.defaultProps) {
      n = _({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Qo(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : _({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ne(), l = Bn(e), o = _n(r, l);
    o.payload = n, t != null && (o.callback = t), n = Un(e, o, l), n !== null && (un(n, e, l, r), el(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ne(), l = Bn(e), o = _n(r, l);
    o.tag = 1, o.payload = n, t != null && (o.callback = t), n = Un(e, o, l), n !== null && (un(n, e, l, r), el(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Ne(), r = Bn(e), l = _n(t, r);
    l.tag = 2, n != null && (l.callback = n), n = Un(e, l, r), n !== null && (un(n, e, r, t), el(n, e, r));
  } };
  function zs(e, n, t, r, l, o, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, o) : !0;
  }
  function Ts(e, n, t) {
    var r = !1, l = Fn, o = n.contextType;
    return typeof o == "object" && o !== null ? o = Ye(o) : (l = Re(n) ? Zn : ke.current, r = n.contextTypes, o = (r = r != null) ? wt(e, l) : Fn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
  }
  function Ls(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Ko(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, Oo(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = Ye(o) : (o = Re(n) ? Zn : ke.current, l.context = wt(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Qo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Nt(e, n) {
    try {
      var t = "", r = n;
      do
        t += I(r), r = r.return;
      while (r);
      var l = t;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Yo(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Xo(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var tf = typeof WeakMap == "function" ? WeakMap : Map;
  function Rs(e, n, t) {
    t = _n(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      hl || (hl = !0, au = r), Xo(e, n);
    }, t;
  }
  function Os(e, n, t) {
    t = _n(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Xo(e, n);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      Xo(e, n), typeof r != "function" && (Vn === null ? Vn = /* @__PURE__ */ new Set([this]) : Vn.add(this));
      var u = n.stack;
      this.componentDidCatch(n.value, { componentStack: u !== null ? u : "" });
    }), t;
  }
  function Ms(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new tf();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = yf.bind(null, e, n, t), n.then(e, e));
  }
  function Ds(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fs(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = _n(-1, 1), n.tag = 2, Un(t, n, 1))), t.lanes |= 1), e);
  }
  var rf = we.ReactCurrentOwner, Oe = !1;
  function Pe(e, n, t, r) {
    n.child = e === null ? ns(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Is(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return xt(n, l), r = Ao(e, n, t, r, o, l), t = Vo(), e !== null && !Oe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Cn(e, n, l)) : (q && t && Eo(n), n.flags |= 1, Pe(e, n, r, l), n.child);
  }
  function js(e, n, t, r, l) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" && !vu(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Us(e, n, o, r, l)) : (e = Sl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var u = o.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Zt, t(u, r) && e.ref === n.ref) return Cn(e, n, l);
    }
    return n.flags |= 1, e = $n(o, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Us(e, n, t, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Zt(o, r) && e.ref === n.ref) if (Oe = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Oe = !0);
      else return n.lanes = e.lanes, Cn(e, n, l);
    }
    return Go(e, n, t, r, l);
  }
  function As(e, n, t) {
    var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Tt, He), He |= t;
    else {
      if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, K(Tt, He), He |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, K(Tt, He), He |= r;
    }
    else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, K(Tt, He), He |= r;
    return Pe(e, n, l, t), n.child;
  }
  function Vs(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Go(e, n, t, r, l) {
    var o = Re(t) ? Zn : ke.current;
    return o = wt(n, o), xt(n, l), t = Ao(e, n, t, r, o, l), r = Vo(), e !== null && !Oe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Cn(e, n, l)) : (q && r && Eo(n), n.flags |= 1, Pe(e, n, t, l), n.child);
  }
  function Hs(e, n, t, r, l) {
    if (Re(t)) {
      var o = !0;
      Kr(n);
    } else o = !1;
    if (xt(n, l), n.stateNode === null) cl(e, n), Ts(n, t, r), Ko(n, t, r, l), r = !0;
    else if (e === null) {
      var u = n.stateNode, i = n.memoizedProps;
      u.props = i;
      var s = u.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Ye(p) : (p = Re(t) ? Zn : ke.current, p = wt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      g || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== p) && Ls(n, u, r, p), jn = !1;
      var h = n.memoizedState;
      u.state = h, nl(n, r, u, l), s = n.memoizedState, i !== r || h !== s || Le.current || jn ? (typeof y == "function" && (Qo(n, t, y, r), s = n.memoizedState), (i = jn || zs(n, t, i, r, h, s, p)) ? (g || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), u.props = r, u.state = s, u.context = p, r = i) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      u = n.stateNode, rs(e, n), i = n.memoizedProps, p = n.type === n.elementType ? i : rn(n.type, i), u.props = p, g = n.pendingProps, h = u.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ye(s) : (s = Re(t) ? Zn : ke.current, s = wt(n, s));
      var S = t.getDerivedStateFromProps;
      (y = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== g || h !== s) && Ls(n, u, r, s), jn = !1, h = n.memoizedState, u.state = h, nl(n, r, u, l);
      var C = n.memoizedState;
      i !== g || h !== C || Le.current || jn ? (typeof S == "function" && (Qo(n, t, S, r), C = n.memoizedState), (p = jn || zs(n, t, p, r, h, C, s) || !1) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, C, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, C, s)), typeof u.componentDidUpdate == "function" && (n.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = C), u.props = r, u.state = C, u.context = s, r = p) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Zo(e, n, t, r, o, l);
  }
  function Zo(e, n, t, r, l, o) {
    Vs(e, n);
    var u = (n.flags & 128) !== 0;
    if (!r && !u) return l && Ki(n, t, !1), Cn(e, n, o);
    r = n.stateNode, rf.current = n;
    var i = u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && u ? (n.child = _t(n, e.child, null, o), n.child = _t(n, null, i, o)) : Pe(e, n, i, o), n.memoizedState = r.state, l && Ki(n, t, !0), n.child;
  }
  function Bs(e) {
    var n = e.stateNode;
    n.pendingContext ? $i(e, n.pendingContext, n.pendingContext !== n.context) : n.context && $i(e, n.context, !1), Mo(e, n.containerInfo);
  }
  function Ws(e, n, t, r, l) {
    return Et(), Po(l), n.flags |= 256, Pe(e, n, t, r), n.child;
  }
  var Jo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function $s(e, n, t) {
    var r = n.pendingProps, l = b.current, o = !1, u = (n.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), K(b, l & 1), e === null)
      return xo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, u = { mode: "hidden", children: u }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = El(u, r, 0, null), e = ut(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = qo(t), n.memoizedState = Jo, e) : bo(n, u));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return lf(e, n, u, r, i, l, t);
    if (o) {
      o = r.fallback, u = n.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(u & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = $n(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = $n(i, o) : (o = ut(o, u, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, u = e.child.memoizedState, u = u === null ? qo(t) : { baseLanes: u.baseLanes | t, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~t, n.memoizedState = Jo, r;
    }
    return o = e.child, e = o.sibling, r = $n(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function bo(e, n) {
    return n = El({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function al(e, n, t, r) {
    return r !== null && Po(r), _t(n, e.child, null, t), e = bo(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function lf(e, n, t, r, l, o, u) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Yo(Error(m(422))), al(e, n, u, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), o = ut(o, l, u, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && _t(n, e.child, null, u), n.child.memoizedState = qo(u), n.memoizedState = Jo, o);
    if (!(n.mode & 1)) return al(e, n, u, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, o = Error(m(419)), r = Yo(o, r, void 0), al(e, n, u, r);
    }
    if (i = (u & e.childLanes) !== 0, Oe || i) {
      if (r = fe, r !== null) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, En(e, l), un(r, e, l, -1));
      }
      return hu(), r = Yo(Error(m(421))), al(e, n, u, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = gf.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Ve = Mn(l.nextSibling), Ae = n, q = !0, tn = null, e !== null && (Qe[Ke++] = kn, Qe[Ke++] = Sn, Qe[Ke++] = Jn, kn = e.id, Sn = e.overflow, Jn = n), n = bo(n, r.children), n.flags |= 4096, n);
  }
  function Qs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Lo(e.return, n, t);
  }
  function eu(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
  }
  function Ks(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, o = r.tail;
    if (Pe(e, n, r.children, t), r = b.current, r & 2) r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qs(e, t, n);
        else if (e.tag === 19) Qs(e, t, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (K(b, r), !(n.mode & 1)) n.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && tl(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), eu(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && tl(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        eu(n, !0, t, null, o);
        break;
      case "together":
        eu(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Cn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), tt |= n.lanes, !(t & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = $n(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = $n(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function of(e, n, t) {
    switch (n.tag) {
      case 3:
        Bs(n), Et();
        break;
      case 5:
        us(n);
        break;
      case 1:
        Re(n.type) && Kr(n);
        break;
      case 4:
        Mo(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        K(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (K(b, b.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? $s(e, n, t) : (K(b, b.current & 1), e = Cn(e, n, t), e !== null ? e.sibling : null);
        K(b, b.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return Ks(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), K(b, b.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, As(e, n, t);
    }
    return Cn(e, n, t);
  }
  var Ys, nu, Xs, Gs;
  Ys = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, nu = function() {
  }, Xs = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, et(pn.current);
      var o = null;
      switch (t) {
        case "input":
          l = Tl(e, l), r = Tl(e, r), o = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Ol(e, l), r = Ol(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
      }
      Dl(t, r);
      var u;
      t = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var i = l[p];
        for (u in i) i.hasOwnProperty(u) && (t || (t = {}), t[u] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (ye.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l?.[p], r.hasOwnProperty(p) && s !== i && (s != null || i != null)) if (p === "style") if (i) {
          for (u in i) !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (t || (t = {}), t[u] = "");
          for (u in s) s.hasOwnProperty(u) && i[u] !== s[u] && (t || (t = {}), t[u] = s[u]);
        } else t || (o || (o = []), o.push(
          p,
          t
        )), t = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (ye.hasOwnProperty(p) ? (s != null && p === "onScroll" && Y("scroll", e), o || i === s || (o = [])) : (o = o || []).push(p, s));
      }
      t && (o = o || []).push("style", t);
      var p = o;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, Gs = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function fr(e, n) {
    if (!q) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ee(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function uf(e, n, t) {
    var r = n.pendingProps;
    switch (_o(n), n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ee(n), null;
      case 1:
        return Re(n.type) && Qr(), Ee(n), null;
      case 3:
        return r = n.stateNode, Pt(), X(Le), X(ke), Io(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, tn !== null && (du(tn), tn = null))), nu(e, n), Ee(n), null;
      case 5:
        Do(n);
        var l = et(ur.current);
        if (t = n.type, e !== null && n.stateNode != null) Xs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return Ee(n), null;
          }
          if (e = et(pn.current), Zr(n)) {
            r = n.stateNode, t = n.type;
            var o = n.memoizedProps;
            switch (r[dn] = n, r[nr] = o, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                Y("cancel", r), Y("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qt.length; l++) Y(qt[l], r);
                break;
              case "source":
                Y("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  r
                ), Y("load", r);
                break;
              case "details":
                Y("toggle", r);
                break;
              case "input":
                Tu(r, o), Y("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Y("invalid", r);
                break;
              case "textarea":
                Ou(r, o), Y("invalid", r);
            }
            Dl(t, o), l = null;
            for (var u in o) if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && Br(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && Br(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : ye.hasOwnProperty(u) && i != null && u === "onScroll" && Y("scroll", r);
            }
            switch (t) {
              case "input":
                wr(r), Ru(r, o, !0);
                break;
              case "textarea":
                wr(r), Du(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Wr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Fu(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(t, { is: r.is }) : (e = u.createElement(t), t === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, t), e[dn] = n, e[nr] = r, Ys(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (u = Fl(t, r), t) {
                case "dialog":
                  Y("cancel", e), Y("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Y("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qt.length; l++) Y(qt[l], e);
                  l = r;
                  break;
                case "source":
                  Y("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Y(
                    "error",
                    e
                  ), Y("load", e), l = r;
                  break;
                case "details":
                  Y("toggle", e), l = r;
                  break;
                case "input":
                  Tu(e, r), l = Tl(e, r), Y("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), Y("invalid", e);
                  break;
                case "textarea":
                  Ou(e, r), l = Ol(e, r), Y("invalid", e);
                  break;
                default:
                  l = r;
              }
              Dl(t, l), i = l;
              for (o in i) if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "style" ? Uu(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Iu(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Mt(e, s) : typeof s == "number" && Mt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ye.hasOwnProperty(o) ? s != null && o === "onScroll" && Y("scroll", e) : s != null && Je(e, o, s, u));
              }
              switch (t) {
                case "input":
                  wr(e), Ru(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Du(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + B(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? it(e, !!r.multiple, o, !1) : r.defaultValue != null && it(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Wr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return Ee(n), null;
      case 6:
        if (e && n.stateNode != null) Gs(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = et(ur.current), et(pn.current), Zr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[dn] = n, (o = r.nodeValue !== t) && (e = Ae, e !== null)) switch (e.tag) {
              case 3:
                Br(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            o && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[dn] = n, n.stateNode = r;
        }
        return Ee(n), null;
      case 13:
        if (X(b), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (q && Ve !== null && n.mode & 1 && !(n.flags & 128)) qi(), Et(), n.flags |= 98560, o = !1;
          else if (o = Zr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(m(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(m(317));
              o[dn] = n;
            } else Et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            Ee(n), o = !1;
          } else tn !== null && (du(tn), tn = null), o = !0;
          if (!o) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || b.current & 1 ? se === 0 && (se = 3) : hu())), n.updateQueue !== null && (n.flags |= 4), Ee(n), null);
      case 4:
        return Pt(), nu(e, n), e === null && bt(n.stateNode.containerInfo), Ee(n), null;
      case 10:
        return To(n.type._context), Ee(n), null;
      case 17:
        return Re(n.type) && Qr(), Ee(n), null;
      case 19:
        if (X(b), o = n.memoizedState, o === null) return Ee(n), null;
        if (r = (n.flags & 128) !== 0, u = o.rendering, u === null) if (r) fr(o, !1);
        else {
          if (se !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (u = tl(e), u !== null) {
              for (n.flags |= 128, fr(o, !1), r = u.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return K(b, b.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          o.tail !== null && le() > Lt && (n.flags |= 128, r = !0, fr(o, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = tl(u), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), fr(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !q) return Ee(n), null;
          } else 2 * le() - o.renderingStartTime > Lt && t !== 1073741824 && (n.flags |= 128, r = !0, fr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (u.sibling = n.child, n.child = u) : (t = o.last, t !== null ? t.sibling = u : n.child = u, o.last = u);
        }
        return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = le(), n.sibling = null, t = b.current, K(b, r ? t & 1 | 2 : t & 1), n) : (Ee(n), null);
      case 22:
      case 23:
        return mu(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? He & 1073741824 && (Ee(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ee(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function sf(e, n) {
    switch (_o(n), n.tag) {
      case 1:
        return Re(n.type) && Qr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Pt(), X(Le), X(ke), Io(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Do(n), null;
      case 13:
        if (X(b), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return X(b), null;
      case 4:
        return Pt(), null;
      case 10:
        return To(n.type._context), null;
      case 22:
      case 23:
        return mu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, _e = !1, af = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      te(e, n, r);
    }
    else t.current = null;
  }
  function tu(e, n, t) {
    try {
      t();
    } catch (r) {
      te(e, n, r);
    }
  }
  var Zs = !1;
  function cf(e, n) {
    if (mo = Rr, e = zi(), oo(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var u = 0, i = -1, s = -1, p = 0, y = 0, g = e, h = null;
          n: for (; ; ) {
            for (var S; g !== t || l !== 0 && g.nodeType !== 3 || (i = u + l), g !== o || r !== 0 && g.nodeType !== 3 || (s = u + r), g.nodeType === 3 && (u += g.nodeValue.length), (S = g.firstChild) !== null; )
              h = g, g = S;
            for (; ; ) {
              if (g === e) break n;
              if (h === t && ++p === l && (i = u), h === o && ++y === r && (s = u), (S = g.nextSibling) !== null) break;
              g = h, h = g.parentNode;
            }
            g = S;
          }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (ho = { focusedElem: e, selectionRange: t }, Rr = !1, E = n; E !== null; ) if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, E = e;
    else for (; E !== null; ) {
      n = E;
      try {
        var C = n.alternate;
        if (n.flags & 1024) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (C !== null) {
              var x = C.memoizedProps, oe = C.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? x : rn(n.type, x), oe);
              f.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = n.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (w) {
        te(n, n.return, w);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, E = e;
        break;
      }
      E = n.return;
    }
    return C = Zs, Zs = !1, C;
  }
  function dr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && tu(n, t, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ru(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function Js(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Js(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[dn], delete n[nr], delete n[wo], delete n[Qc], delete n[Kc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function qs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function bs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qs(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lu(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Wr));
    else if (r !== 4 && (e = e.child, e !== null)) for (lu(e, n, t), e = e.sibling; e !== null; ) lu(e, n, t), e = e.sibling;
  }
  function ou(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ou(e, n, t), e = e.sibling; e !== null; ) ou(e, n, t), e = e.sibling;
  }
  var he = null, ln = !1;
  function An(e, n, t) {
    for (t = t.child; t !== null; ) ea(e, n, t), t = t.sibling;
  }
  function ea(e, n, t) {
    if (fn && typeof fn.onCommitFiberUnmount == "function") try {
      fn.onCommitFiberUnmount(xr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        _e || zt(t, n);
      case 6:
        var r = he, l = ln;
        he = null, An(e, n, t), he = r, ln = l, he !== null && (ln ? (e = he, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : he.removeChild(t.stateNode));
        break;
      case 18:
        he !== null && (ln ? (e = he, t = t.stateNode, e.nodeType === 8 ? go(e.parentNode, t) : e.nodeType === 1 && go(e, t), $t(e)) : go(he, t.stateNode));
        break;
      case 4:
        r = he, l = ln, he = t.stateNode.containerInfo, ln = !0, An(e, n, t), he = r, ln = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_e && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, u = o.destroy;
            o = o.tag, u !== void 0 && (o & 2 || o & 4) && tu(t, n, u), l = l.next;
          } while (l !== r);
        }
        An(e, n, t);
        break;
      case 1:
        if (!_e && (zt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (i) {
          te(t, n, i);
        }
        An(e, n, t);
        break;
      case 21:
        An(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (_e = (r = _e) || t.memoizedState !== null, An(e, n, t), _e = r) : An(e, n, t);
        break;
      default:
        An(e, n, t);
    }
  }
  function na(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new af()), n.forEach(function(r) {
        var l = wf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function on(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, u = n, i = u;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              he = i.stateNode, ln = !1;
              break e;
            case 3:
              he = i.stateNode.containerInfo, ln = !0;
              break e;
            case 4:
              he = i.stateNode.containerInfo, ln = !0;
              break e;
          }
          i = i.return;
        }
        if (he === null) throw Error(m(160));
        ea(o, u, l), he = null, ln = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        te(l, n, p);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) ta(n, e), n = n.sibling;
  }
  function ta(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (on(n, e), hn(e), r & 4) {
          try {
            dr(3, e, e.return), dl(3, e);
          } catch (x) {
            te(e, e.return, x);
          }
          try {
            dr(5, e, e.return);
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 1:
        on(n, e), hn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (on(n, e), hn(e), r & 512 && t !== null && zt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Mt(l, "");
          } catch (x) {
            te(e, e.return, x);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, u = t !== null ? t.memoizedProps : o, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && o.type === "radio" && o.name != null && Lu(l, o), Fl(i, u);
            var p = Fl(i, o);
            for (u = 0; u < s.length; u += 2) {
              var y = s[u], g = s[u + 1];
              y === "style" ? Uu(l, g) : y === "dangerouslySetInnerHTML" ? Iu(l, g) : y === "children" ? Mt(l, g) : Je(l, y, g, p);
            }
            switch (i) {
              case "input":
                Ll(l, o);
                break;
              case "textarea":
                Mu(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null ? it(l, !!o.multiple, S, !1) : h !== !!o.multiple && (o.defaultValue != null ? it(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : it(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[nr] = o;
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 6:
        if (on(n, e), hn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 3:
        if (on(n, e), hn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          $t(n.containerInfo);
        } catch (x) {
          te(e, e.return, x);
        }
        break;
      case 4:
        on(n, e), hn(e);
        break;
      case 13:
        on(n, e), hn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (su = le())), r & 4 && na(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (_e = (p = _e) || y, on(n, e), _e = p) : on(n, e), hn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (E = e, y = e.child; y !== null; ) {
            for (g = E = y; E !== null; ) {
              switch (h = E, S = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dr(4, h, h.return);
                  break;
                case 1:
                  zt(h, h.return);
                  var C = h.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    r = h, t = h.return;
                    try {
                      n = r, C.props = n.memoizedProps, C.state = n.memoizedState, C.componentWillUnmount();
                    } catch (x) {
                      te(r, t, x);
                    }
                  }
                  break;
                case 5:
                  zt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    oa(g);
                    continue;
                  }
              }
              S !== null ? (S.return = h, E = S) : oa(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = ju("display", u));
                } catch (x) {
                  te(e, e.return, x);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (x) {
                te(e, e.return, x);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), g = g.return;
            }
            y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        on(n, e), hn(e), r & 4 && na(e);
        break;
      case 21:
        break;
      default:
        on(
          n,
          e
        ), hn(e);
    }
  }
  function hn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (qs(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Mt(l, ""), r.flags &= -33);
            var o = bs(e);
            ou(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, i = bs(e);
            lu(e, i, u);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        te(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function ff(e, n, t) {
    E = e, ra(e);
  }
  function ra(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || fl;
        if (!u) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || _e;
          i = fl;
          var p = _e;
          if (fl = u, (_e = s) && !p) for (E = l; E !== null; ) u = E, s = u.child, u.tag === 22 && u.memoizedState !== null ? ua(l) : s !== null ? (s.return = u, E = s) : ua(l);
          for (; o !== null; ) E = o, ra(o), o = o.sibling;
          E = l, fl = i, _e = p;
        }
        la(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : la(e);
    }
  }
  function la(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              _e || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !_e) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : rn(n.type, t.memoizedProps);
                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = n.updateQueue;
              o !== null && os(n, o, r);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                os(n, u, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var p = n.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var g = y.dehydrated;
                    g !== null && $t(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          _e || n.flags & 512 && ru(n);
        } catch (h) {
          te(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function oa(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function ua(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              te(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                te(n, l, s);
              }
            }
            var o = n.return;
            try {
              ru(n);
            } catch (s) {
              te(n, o, s);
            }
            break;
          case 5:
            var u = n.return;
            try {
              ru(n);
            } catch (s) {
              te(n, u, s);
            }
        }
      } catch (s) {
        te(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        i.return = n.return, E = i;
        break;
      }
      E = n.return;
    }
  }
  var df = Math.ceil, pl = we.ReactCurrentDispatcher, uu = we.ReactCurrentOwner, Ge = we.ReactCurrentBatchConfig, F = 0, fe = null, ue = null, ve = 0, He = 0, Tt = Dn(0), se = 0, pr = null, tt = 0, ml = 0, iu = 0, mr = null, Me = null, su = 0, Lt = 1 / 0, xn = null, hl = !1, au = null, Vn = null, vl = !1, Hn = null, yl = 0, hr = 0, cu = null, gl = -1, wl = 0;
  function Ne() {
    return F & 6 ? le() : gl !== -1 ? gl : gl = le();
  }
  function Bn(e) {
    return e.mode & 1 ? F & 2 && ve !== 0 ? ve & -ve : Xc.transition !== null ? (wl === 0 && (wl = bu()), wl) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : si(e.type)), e) : 1;
  }
  function un(e, n, t, r) {
    if (50 < hr) throw hr = 0, cu = null, Error(m(185));
    At(e, t, r), (!(F & 2) || e !== fe) && (e === fe && (!(F & 2) && (ml |= t), se === 4 && Wn(e, ve)), De(e, r), t === 1 && F === 0 && !(n.mode & 1) && (Lt = le() + 500, Yr && In()));
  }
  function De(e, n) {
    var t = e.callbackNode;
    Xa(e, n);
    var r = zr(e, e === fe ? ve : 0);
    if (r === 0) t !== null && Zu(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Zu(t), n === 1) e.tag === 0 ? Yc(sa.bind(null, e)) : Yi(sa.bind(null, e)), Wc(function() {
        !(F & 6) && In();
      }), t = null;
      else {
        switch (ei(r)) {
          case 1:
            t = Bl;
            break;
          case 4:
            t = Ju;
            break;
          case 16:
            t = Cr;
            break;
          case 536870912:
            t = qu;
            break;
          default:
            t = Cr;
        }
        t = va(t, ia.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function ia(e, n) {
    if (gl = -1, wl = 0, F & 6) throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t) return null;
    var r = zr(e, e === fe ? ve : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = kl(e, r);
    else {
      n = r;
      var l = F;
      F |= 2;
      var o = ca();
      (fe !== e || ve !== n) && (xn = null, Lt = le() + 500, lt(e, n));
      do
        try {
          hf();
          break;
        } catch (i) {
          aa(e, i);
        }
      while (!0);
      zo(), pl.current = o, F = l, ue !== null ? n = 0 : (fe = null, ve = 0, n = se);
    }
    if (n !== 0) {
      if (n === 2 && (l = Wl(e), l !== 0 && (r = l, n = fu(e, l))), n === 1) throw t = pr, lt(e, 0), Wn(e, r), De(e, le()), t;
      if (n === 6) Wn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !pf(l) && (n = kl(e, r), n === 2 && (o = Wl(e), o !== 0 && (r = o, n = fu(e, o))), n === 1)) throw t = pr, lt(e, 0), Wn(e, r), De(e, le()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ot(e, Me, xn);
            break;
          case 3:
            if (Wn(e, r), (r & 130023424) === r && (n = su + 500 - le(), 10 < n)) {
              if (zr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ne(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = yo(ot.bind(null, e, Me, xn), n);
              break;
            }
            ot(e, Me, xn);
            break;
          case 4:
            if (Wn(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - en(r);
              o = 1 << u, u = n[u], u > l && (l = u), r &= ~o;
            }
            if (r = l, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * df(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = yo(ot.bind(null, e, Me, xn), r);
              break;
            }
            ot(e, Me, xn);
            break;
          case 5:
            ot(e, Me, xn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return De(e, le()), e.callbackNode === t ? ia.bind(null, e) : null;
  }
  function fu(e, n) {
    var t = mr;
    return e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256), e = kl(e, n), e !== 2 && (n = Me, Me = t, n !== null && du(n)), e;
  }
  function du(e) {
    Me === null ? Me = e : Me.push.apply(Me, e);
  }
  function pf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!nn(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Wn(e, n) {
    for (n &= ~iu, n &= ~ml, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - en(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function sa(e) {
    if (F & 6) throw Error(m(327));
    Rt();
    var n = zr(e, 0);
    if (!(n & 1)) return De(e, le()), null;
    var t = kl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Wl(e);
      r !== 0 && (n = r, t = fu(e, r));
    }
    if (t === 1) throw t = pr, lt(e, 0), Wn(e, n), De(e, le()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ot(e, Me, xn), De(e, le()), null;
  }
  function pu(e, n) {
    var t = F;
    F |= 1;
    try {
      return e(n);
    } finally {
      F = t, F === 0 && (Lt = le() + 500, Yr && In());
    }
  }
  function rt(e) {
    Hn !== null && Hn.tag === 0 && !(F & 6) && Rt();
    var n = F;
    F |= 1;
    var t = Ge.transition, r = W;
    try {
      if (Ge.transition = null, W = 1, e) return e();
    } finally {
      W = r, Ge.transition = t, F = n, !(F & 6) && In();
    }
  }
  function mu() {
    He = Tt.current, X(Tt);
  }
  function lt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Bc(t)), ue !== null) for (t = ue.return; t !== null; ) {
      var r = t;
      switch (_o(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          Pt(), X(Le), X(ke), Io();
          break;
        case 5:
          Do(r);
          break;
        case 4:
          Pt();
          break;
        case 13:
          X(b);
          break;
        case 19:
          X(b);
          break;
        case 10:
          To(r.type._context);
          break;
        case 22:
        case 23:
          mu();
      }
      t = t.return;
    }
    if (fe = e, ue = e = $n(e.current, null), ve = He = n, se = 0, pr = null, iu = ml = tt = 0, Me = mr = null, bn !== null) {
      for (n = 0; n < bn.length; n++) if (t = bn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var u = o.next;
          o.next = l, r.next = u;
        }
        t.pending = r;
      }
      bn = null;
    }
    return e;
  }
  function aa(e, n) {
    do {
      var t = ue;
      try {
        if (zo(), rl.current = il, ll) {
          for (var r = ee.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (nt = 0, ce = ie = ee = null, ir = !1, sr = 0, uu.current = null, t === null || t.return === null) {
          se = 1, pr = n, ue = null;
          break;
        }
        e: {
          var o = e, u = t.return, i = t, s = n;
          if (n = ve, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var S = Ds(u);
            if (S !== null) {
              S.flags &= -257, Fs(S, u, i, o, n), S.mode & 1 && Ms(o, p, n), n = S, s = p;
              var C = n.updateQueue;
              if (C === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(s), n.updateQueue = x;
              } else C.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Ms(o, p, n), hu();
                break e;
              }
              s = Error(m(426));
            }
          } else if (q && i.mode & 1) {
            var oe = Ds(u);
            if (oe !== null) {
              !(oe.flags & 65536) && (oe.flags |= 256), Fs(oe, u, i, o, n), Po(Nt(s, i));
              break e;
            }
          }
          o = s = Nt(s, i), se !== 4 && (se = 2), mr === null ? mr = [o] : mr.push(o), o = u;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var f = Rs(o, s, n);
                ls(o, f);
                break e;
              case 1:
                i = s;
                var a = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Vn === null || !Vn.has(d)))) {
                  o.flags |= 65536, n &= -n, o.lanes |= n;
                  var w = Os(o, i, n);
                  ls(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        da(t);
      } catch (P) {
        n = P, ue === t && t !== null && (ue = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ca() {
    var e = pl.current;
    return pl.current = il, e === null ? il : e;
  }
  function hu() {
    (se === 0 || se === 3 || se === 2) && (se = 4), fe === null || !(tt & 268435455) && !(ml & 268435455) || Wn(fe, ve);
  }
  function kl(e, n) {
    var t = F;
    F |= 2;
    var r = ca();
    (fe !== e || ve !== n) && (xn = null, lt(e, n));
    do
      try {
        mf();
        break;
      } catch (l) {
        aa(e, l);
      }
    while (!0);
    if (zo(), F = t, pl.current = r, ue !== null) throw Error(m(261));
    return fe = null, ve = 0, se;
  }
  function mf() {
    for (; ue !== null; ) fa(ue);
  }
  function hf() {
    for (; ue !== null && !Aa(); ) fa(ue);
  }
  function fa(e) {
    var n = ha(e.alternate, e, He);
    e.memoizedProps = e.pendingProps, n === null ? da(e) : ue = n, uu.current = null;
  }
  function da(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = sf(t, n), t !== null) {
          t.flags &= 32767, ue = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          se = 6, ue = null;
          return;
        }
      } else if (t = uf(t, n, He), t !== null) {
        ue = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        ue = n;
        return;
      }
      ue = n = e;
    } while (n !== null);
    se === 0 && (se = 5);
  }
  function ot(e, n, t) {
    var r = W, l = Ge.transition;
    try {
      Ge.transition = null, W = 1, vf(e, n, t, r);
    } finally {
      Ge.transition = l, W = r;
    }
    return null;
  }
  function vf(e, n, t, r) {
    do
      Rt();
    while (Hn !== null);
    if (F & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = t.lanes | t.childLanes;
    if (Ga(e, o), e === fe && (ue = fe = null, ve = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vl || (vl = !0, va(Cr, function() {
      return Rt(), null;
    })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
      o = Ge.transition, Ge.transition = null;
      var u = W;
      W = 1;
      var i = F;
      F |= 4, uu.current = null, cf(e, t), ta(t, e), Fc(ho), Rr = !!mo, ho = mo = null, e.current = t, ff(t), Va(), F = i, W = u, Ge.transition = o;
    } else e.current = t;
    if (vl && (vl = !1, Hn = e, yl = l), o = e.pendingLanes, o === 0 && (Vn = null), Wa(t.stateNode), De(e, le()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = au, au = null, e;
    return yl & 1 && e.tag !== 0 && Rt(), o = e.pendingLanes, o & 1 ? e === cu ? hr++ : (hr = 0, cu = e) : hr = 0, In(), null;
  }
  function Rt() {
    if (Hn !== null) {
      var e = ei(yl), n = Ge.transition, t = W;
      try {
        if (Ge.transition = null, W = 16 > e ? 16 : e, Hn === null) var r = !1;
        else {
          if (e = Hn, Hn = null, yl = 0, F & 6) throw Error(m(331));
          var l = F;
          for (F |= 4, E = e.current; E !== null; ) {
            var o = E, u = o.child;
            if (E.flags & 16) {
              var i = o.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, y, o);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, E = g;
                    else for (; E !== null; ) {
                      y = E;
                      var h = y.sibling, S = y.return;
                      if (Js(y), y === p) {
                        E = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = S, E = h;
                        break;
                      }
                      E = S;
                    }
                  }
                }
                var C = o.alternate;
                if (C !== null) {
                  var x = C.child;
                  if (x !== null) {
                    C.child = null;
                    do {
                      var oe = x.sibling;
                      x.sibling = null, x = oe;
                    } while (x !== null);
                  }
                }
                E = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null) u.return = o, E = u;
            else e: for (; E !== null; ) {
              if (o = E, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  dr(9, o, o.return);
              }
              var f = o.sibling;
              if (f !== null) {
                f.return = o.return, E = f;
                break e;
              }
              E = o.return;
            }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            u = E;
            var d = u.child;
            if (u.subtreeFlags & 2064 && d !== null) d.return = u, E = d;
            else e: for (u = a; E !== null; ) {
              if (i = E, i.flags & 2048) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, i);
                }
              } catch (P) {
                te(i, i.return, P);
              }
              if (i === u) {
                E = null;
                break e;
              }
              var w = i.sibling;
              if (w !== null) {
                w.return = i.return, E = w;
                break e;
              }
              E = i.return;
            }
          }
          if (F = l, In(), fn && typeof fn.onPostCommitFiberRoot == "function") try {
            fn.onPostCommitFiberRoot(xr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        W = t, Ge.transition = n;
      }
    }
    return !1;
  }
  function pa(e, n, t) {
    n = Nt(t, n), n = Rs(e, n, 1), e = Un(e, n, 1), n = Ne(), e !== null && (At(e, 1, n), De(e, n));
  }
  function te(e, n, t) {
    if (e.tag === 3) pa(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        pa(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vn === null || !Vn.has(r))) {
          e = Nt(t, e), e = Os(n, e, 1), n = Un(n, e, 1), e = Ne(), n !== null && (At(n, 1, e), De(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function yf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Ne(), e.pingedLanes |= e.suspendedLanes & t, fe === e && (ve & t) === t && (se === 4 || se === 3 && (ve & 130023424) === ve && 500 > le() - su ? lt(e, 0) : iu |= t), De(e, n);
  }
  function ma(e, n) {
    n === 0 && (e.mode & 1 ? (n = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : n = 1);
    var t = Ne();
    e = En(e, n), e !== null && (At(e, n, t), De(e, t));
  }
  function gf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), ma(e, t);
  }
  function wf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), ma(e, t);
  }
  var ha;
  ha = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || Le.current) Oe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return Oe = !1, of(e, n, t);
      Oe = !!(e.flags & 131072);
    }
    else Oe = !1, q && n.flags & 1048576 && Xi(n, Gr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        cl(e, n), e = n.pendingProps;
        var l = wt(n, ke.current);
        xt(n, t), l = Ao(null, n, r, e, l, t);
        var o = Vo();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Re(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Oo(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, Ko(n, r, e, t), n = Zo(null, n, r, !0, o, t)) : (n.tag = 0, q && o && Eo(n), Pe(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (cl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Sf(r), e = rn(r, e), l) {
            case 0:
              n = Go(null, n, r, e, t);
              break e;
            case 1:
              n = Hs(null, n, r, e, t);
              break e;
            case 11:
              n = Is(null, n, r, e, t);
              break e;
            case 14:
              n = js(null, n, r, rn(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Go(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Hs(e, n, r, l, t);
      case 3:
        e: {
          if (Bs(n), e === null) throw Error(m(387));
          r = n.pendingProps, o = n.memoizedState, l = o.element, rs(e, n), nl(n, r, null, t);
          var u = n.memoizedState;
          if (r = u.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = Nt(Error(m(423)), n), n = Ws(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = Nt(Error(m(424)), n), n = Ws(e, n, r, t, l);
            break e;
          } else for (Ve = Mn(n.stateNode.containerInfo.firstChild), Ae = n, q = !0, tn = null, t = ns(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Et(), r === l) {
              n = Cn(e, n, t);
              break e;
            }
            Pe(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return us(n), e === null && xo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, vo(r, l) ? u = null : o !== null && vo(r, o) && (n.flags |= 32), Vs(e, n), Pe(e, n, u, t), n.child;
      case 6:
        return e === null && xo(n), null;
      case 13:
        return $s(e, n, t);
      case 4:
        return Mo(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = _t(n, null, r, t) : Pe(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Is(e, n, r, l, t);
      case 7:
        return Pe(e, n, n.pendingProps, t), n.child;
      case 8:
        return Pe(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Pe(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, u = l.value, K(qr, r._currentValue), r._currentValue = u, o !== null) if (nn(o.value, u)) {
            if (o.children === l.children && !Le.current) {
              n = Cn(e, n, t);
              break e;
            }
          } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
            var i = o.dependencies;
            if (i !== null) {
              u = o.child;
              for (var s = i.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = _n(-1, t & -t), s.tag = 2;
                    var p = o.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), Lo(
                    o.return,
                    t,
                    n
                  ), i.lanes |= t;
                  break;
                }
                s = s.next;
              }
            } else if (o.tag === 10) u = o.type === n.type ? null : o.child;
            else if (o.tag === 18) {
              if (u = o.return, u === null) throw Error(m(341));
              u.lanes |= t, i = u.alternate, i !== null && (i.lanes |= t), Lo(u, t, n), u = o.sibling;
            } else u = o.child;
            if (u !== null) u.return = o;
            else for (u = o; u !== null; ) {
              if (u === n) {
                u = null;
                break;
              }
              if (o = u.sibling, o !== null) {
                o.return = u.return, u = o;
                break;
              }
              u = u.return;
            }
            o = u;
          }
          Pe(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, xt(n, t), l = Ye(l), r = r(l), n.flags |= 1, Pe(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = rn(r, n.pendingProps), l = rn(r.type, l), js(e, n, r, l, t);
      case 15:
        return Us(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), cl(e, n), n.tag = 1, Re(r) ? (e = !0, Kr(n)) : e = !1, xt(n, t), Ts(n, r, l), Ko(n, r, l, t), Zo(null, n, r, !0, e, t);
      case 19:
        return Ks(e, n, t);
      case 22:
        return As(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function va(e, n) {
    return Gu(e, n);
  }
  function kf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ze(e, n, t, r) {
    return new kf(e, n, t, r);
  }
  function vu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Sf(e) {
    if (typeof e == "function") return vu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === an) return 11;
      if (e === cn) return 14;
    }
    return 2;
  }
  function $n(e, n) {
    var t = e.alternate;
    return t === null ? (t = Ze(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function Sl(e, n, t, r, l, o) {
    var u = 2;
    if (r = e, typeof e == "function") vu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case ze:
        return ut(t.children, l, o, n);
      case $e:
        u = 8, l |= 8;
        break;
      case Pn:
        return e = Ze(12, t, n, l | 2), e.elementType = Pn, e.lanes = o, e;
      case Ie:
        return e = Ze(13, t, n, l), e.elementType = Ie, e.lanes = o, e;
      case be:
        return e = Ze(19, t, n, l), e.elementType = be, e.lanes = o, e;
      case ne:
        return El(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case yn:
            u = 10;
            break e;
          case Yn:
            u = 9;
            break e;
          case an:
            u = 11;
            break e;
          case cn:
            u = 14;
            break e;
          case Te:
            u = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = Ze(u, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
  }
  function ut(e, n, t, r) {
    return e = Ze(7, e, r, n), e.lanes = t, e;
  }
  function El(e, n, t, r) {
    return e = Ze(22, e, r, n), e.elementType = ne, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function yu(e, n, t) {
    return e = Ze(6, e, null, n), e.lanes = t, e;
  }
  function gu(e, n, t) {
    return n = Ze(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Ef(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $l(0), this.expirationTimes = $l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function wu(e, n, t, r, l, o, u, i, s) {
    return e = new Ef(e, n, t, i, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Ze(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oo(o), e;
  }
  function _f(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: xe, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function ya(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Re(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Re(t)) return Qi(e, t, n);
    }
    return n;
  }
  function ga(e, n, t, r, l, o, u, i, s) {
    return e = wu(t, r, !0, e, l, o, u, i, s), e.context = ya(null), t = e.current, r = Ne(), l = Bn(t), o = _n(r, l), o.callback = n ?? null, Un(t, o, l), e.current.lanes = l, At(e, l, r), De(e, r), e;
  }
  function _l(e, n, t, r) {
    var l = n.current, o = Ne(), u = Bn(l);
    return t = ya(t), n.context === null ? n.context = t : n.pendingContext = t, n = _n(o, u), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Un(l, n, u), e !== null && (un(e, l, u, o), el(e, l, u)), u;
  }
  function Cl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function wa(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function ku(e, n) {
    wa(e, n), (e = e.alternate) && wa(e, n);
  }
  function Cf() {
    return null;
  }
  var ka = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Su(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = Su.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(m(409));
    _l(e, n, null, null);
  }, xl.prototype.unmount = Su.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      rt(function() {
        _l(null, e, null, null);
      }), n[gn] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = ri();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Ln.length && n !== 0 && n < Ln[t].priority; t++) ;
      Ln.splice(t, 0, e), t === 0 && ui(e);
    }
  };
  function Eu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Pl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Sa() {
  }
  function xf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var p = Cl(u);
          o.call(p);
        };
      }
      var u = ga(n, r, e, 0, null, !1, !1, "", Sa);
      return e._reactRootContainer = u, e[gn] = u.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(), u;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = Cl(s);
        i.call(p);
      };
    }
    var s = wu(e, 0, !1, null, null, !1, !1, "", Sa);
    return e._reactRootContainer = s, e[gn] = s.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(function() {
      _l(n, s, t, r);
    }), s;
  }
  function Nl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = Cl(u);
          i.call(s);
        };
      }
      _l(n, u, e, l);
    } else u = xf(t, n, e, l, r);
    return Cl(u);
  }
  ni = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ut(n.pendingLanes);
          t !== 0 && (Ql(n, t | 1), De(n, le()), !(F & 6) && (Lt = le() + 500, In()));
        }
        break;
      case 13:
        rt(function() {
          var r = En(e, 1);
          if (r !== null) {
            var l = Ne();
            un(r, e, 1, l);
          }
        }), ku(e, 1);
    }
  }, Kl = function(e) {
    if (e.tag === 13) {
      var n = En(e, 134217728);
      if (n !== null) {
        var t = Ne();
        un(n, e, 134217728, t);
      }
      ku(e, 134217728);
    }
  }, ti = function(e) {
    if (e.tag === 13) {
      var n = Bn(e), t = En(e, n);
      if (t !== null) {
        var r = Ne();
        un(t, e, n, r);
      }
      ku(e, n);
    }
  }, ri = function() {
    return W;
  }, li = function(e, n) {
    var t = W;
    try {
      return W = e, n();
    } finally {
      W = t;
    }
  }, Ul = function(e, n, t) {
    switch (n) {
      case "input":
        if (Ll(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = $r(r);
              if (!l) throw Error(m(90));
              zu(r), Ll(r, l);
            }
          }
        }
        break;
      case "textarea":
        Mu(e, t);
        break;
      case "select":
        n = t.value, n != null && it(e, !!t.multiple, n, !1);
    }
  }, Bu = pu, Wu = rt;
  var Pf = { usingClientEntryPoint: !1, Events: [tr, yt, $r, Vu, Hu, pu] }, vr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nf = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: we.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Yu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: vr.findFiberByHostInstance || Cf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber) try {
      xr = zl.inject(Nf), fn = zl;
    } catch {
    }
  }
  return Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf, Fe.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Eu(n)) throw Error(m(200));
    return _f(e, n, null, t);
  }, Fe.createRoot = function(e, n) {
    if (!Eu(e)) throw Error(m(299));
    var t = !1, r = "", l = ka;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = wu(e, 1, !1, null, null, t, !1, r, l), e[gn] = n.current, bt(e.nodeType === 8 ? e.parentNode : e), new Su(n);
  }, Fe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Yu(n), e = e === null ? null : e.stateNode, e;
  }, Fe.flushSync = function(e) {
    return rt(e);
  }, Fe.hydrate = function(e, n, t) {
    if (!Pl(n)) throw Error(m(200));
    return Nl(null, e, n, !0, t);
  }, Fe.hydrateRoot = function(e, n, t) {
    if (!Eu(e)) throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, o = "", u = ka;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), n = ga(n, null, e, 1, t ?? null, l, !1, o, u), e[gn] = n.current, bt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
      t,
      l
    );
    return new xl(n);
  }, Fe.render = function(e, n, t) {
    if (!Pl(n)) throw Error(m(200));
    return Nl(null, e, n, !1, t);
  }, Fe.unmountComponentAtNode = function(e) {
    if (!Pl(e)) throw Error(m(40));
    return e._reactRootContainer ? (rt(function() {
      Nl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[gn] = null;
      });
    }), !0) : !1;
  }, Fe.unstable_batchedUpdates = pu, Fe.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Pl(t)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Nl(e, n, t, !1, r);
  }, Fe.version = "18.3.1-next-f1338f8080-20240426", Fe;
}
function Ra() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ra);
    } catch (L) {
      console.error(L);
    }
}
Ra(), La.exports = Df();
var Ff = La.exports, za = Ff;
Pu.createRoot = za.createRoot, Pu.hydrateRoot = za.hydrateRoot;
var gr = Nu();
const If = /* @__PURE__ */ Tf(gr), jf = `
  .hello-world-container {
    font-family: Arial, sans-serif;
    padding: 20px;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: #2a2a2a;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    text-align: center;
    max-width: 300px;
    width: 100%;
    color: #ffffff;
  }
  .hello-world-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  .hello-world-button:hover {
    background-color: #45a049;
  }
  .click-info {
    font-size: 14px;
    color: #bbb;
    margin-top: 10px;
  }
  h2 {
    color: #4CAF50;
  }
`, Uf = ({ label: L = "Hello", name: V = "World", value: m = "{}" }) => {
  const [pe, ye] = gr.useState(0), [Ce, ge] = gr.useState(null), [re, H] = gr.useState({});
  gr.useEffect(() => {
    try {
      H(JSON.parse(m));
    } catch (A) {
      console.error("Failed to parse value prop:", A);
    }
  }, [m]);
  const me = () => {
    ye((A) => A + 1), ge(/* @__PURE__ */ new Date());
  }, ae = (A) => A ? A.toTimeString().split(" ")[0] : "";
  return /* @__PURE__ */ Kn.jsxs(If.Fragment, { children: [
    /* @__PURE__ */ Kn.jsx("style", { children: jf }),
    /* @__PURE__ */ Kn.jsxs("div", { className: "hello-world-container", children: [
      /* @__PURE__ */ Kn.jsxs("h2", { children: [
        L,
        " ",
        V,
        "!"
      ] }),
      /* @__PURE__ */ Kn.jsx("button", { type: "button", className: "hello-world-button", onClick: me, children: "Click Me" }),
      /* @__PURE__ */ Kn.jsx("p", { className: "click-info", children: pe > 0 ? `Clicked ${pe} times. Last one at ${ae(Ce)}` : "Not clicked yet" }),
      re?.message && /* @__PURE__ */ Kn.jsxs("p", { children: [
        "Additional info: ",
        re.message
      ] })
    ] })
  ] });
}, Af = (L) => L.replace(/-([a-z])/g, (V, m) => m.toUpperCase());
class Vf extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const V = this.getPropsFromAttributes();
    Pu.createRoot(this.shadowRoot).render(/* @__PURE__ */ Kn.jsx(Uf, { ...V }));
  }
  getPropsFromAttributes() {
    const V = {};
    for (let m = 0; m < this.attributes.length; m++) {
      const pe = this.attributes[m];
      V[Af(pe.name)] = pe.value;
    }
    return V;
  }
}
customElements.define("my-helloworld", Vf);
