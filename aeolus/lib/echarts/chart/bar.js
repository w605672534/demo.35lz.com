define("echarts/chart/bar", ["require", "../component/base", "./base", "zrender/shape/Rectangle", "../component/axis", "../component/grid", "../component/dataZoom", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/color", "../chart"], function(e) {
    function t(e, t, a, o, r) {
        i.call(this, e, t, a, o, r), n.call(this), this.refresh(o)
    }
    var i = e("../component/base"),
        n = e("./base"),
        a = e("zrender/shape/Rectangle");
    e("../component/axis"), e("../component/grid"), e("../component/dataZoom");
    var o = e("../config"),
        r = e("../util/ecData"),
        s = e("zrender/tool/util"),
        l = e("zrender/tool/color");
    return t.prototype = {
        type: o.CHART_TYPE_BAR,
        _buildShape: function() {
            this._bulidPosition()
        },
        _buildNormal: function(e, t, i, n, o) {
            for (var r, s, l, h, d, m, c, p, u, V, U, g, y = this.series, f = i[0][0], b = y[f], _ = b.xAxisIndex, x = b.yAxisIndex, k = "horizontal" == o ? this.component.xAxis.getAxis(_) : this.component.yAxis.getAxis(x), L = this._mapSize(k, i), v = L.gap, W = L.barGap, w = L.barWidthMap, X = L.barMaxWidthMap, I = L.barWidth, K = L.barMinHeightMap, S = L.interval, T = 0, C = t; C > T && null != k.getNameByIndex(T); T++) {
                "horizontal" == o ? h = k.getCoordByIndex(T) - v / 2 : d = k.getCoordByIndex(T) + v / 2;
                for (var E = 0, A = i.length; A > E; E++) {
                    x = y[i[E][0]].yAxisIndex || 0, _ = y[i[E][0]].xAxisIndex || 0, r = "horizontal" == o ? this.component.yAxis.getAxis(x) : this.component.xAxis.getAxis(_), c = m = u = p = r.getCoord(0);
                    for (var z = 0, M = i[E].length; M > z; z++)
                        if (f = i[E][z], b = y[f], U = b.data[T], g = null != U ? null != U.value ? U.value : U : "-", n[f] = n[f] || {
                                min: Number.POSITIVE_INFINITY,
                                max: Number.NEGATIVE_INFINITY,
                                sum: 0,
                                counter: 0,
                                average: 0
                            }, "-" !== g) {
                            g > 0 ? (s = z > 0 ? r.getCoordSize(g) : "horizontal" == o ? c - r.getCoord(g) : r.getCoord(g) - c, 1 === M && K[f] > s && (s = K[f]), "horizontal" == o ? (m -= s, d = m) : (h = m, m += s)) : 0 > g ? (s = z > 0 ? r.getCoordSize(g) : "horizontal" == o ? r.getCoord(g) - u : u - r.getCoord(g), 1 === M && K[f] > s && (s = K[f]), "horizontal" == o ? (d = p, p += s) : (p -= s, h = p)) : (s = 0, "horizontal" == o ? (m -= s, d = m) : (h = m, m += s));
                            var l = Math.min(X[f] || Number.MAX_VALUE, w[f] || I);
                            n[f][T] = "horizontal" == o ? h + l / 2 : d - l / 2, n[f].min > g && (n[f].min = g, "horizontal" == o ? (n[f].minY = d, n[f].minX = n[f][T]) : (n[f].minX = h + s, n[f].minY = n[f][T])), n[f].max < g && (n[f].max = g, "horizontal" == o ? (n[f].maxY = d, n[f].maxX = n[f][T]) : (n[f].maxX = h + s, n[f].maxY = n[f][T])), n[f].sum += g, n[f].counter++, T % S === 0 && (V = this._getBarItem(f, T, k.getNameByIndex(T), h, d - ("horizontal" == o ? 0 : l), "horizontal" == o ? l : s, "horizontal" == o ? s : l, "horizontal" == o ? "vertical" : "horizontal"), this.shapeList.push(new a(V)))
                        }
                    for (var z = 0, M = i[E].length; M > z; z++) f = i[E][z], b = y[f], U = b.data[T], g = null != U ? null != U.value ? U.value : U : "-", "-" == g && this.deepQuery([U, b, this.option], "calculable") && ("horizontal" == o ? (m -= this.ecTheme.island.r, d = m) : (h = m, m += this.ecTheme.island.r), l = Math.min(X[f] || Number.MAX_VALUE, w[f] || I), V = this._getBarItem(f, T, k.getNameByIndex(T), h + .5, d + .5 - ("horizontal" == o ? 0 : l), ("horizontal" == o ? l : this.ecTheme.island.r) - 1, ("horizontal" == o ? this.ecTheme.island.r : l) - 1, "horizontal" == o ? "vertical" : "horizontal"), V.hoverable = !1, V.draggable = !1, V.style.lineWidth = 1, V.style.brushType = "stroke", V.style.strokeColor = b.calculableHolderColor || this.ecTheme.calculableHolderColor, this.shapeList.push(new a(V)));
                    "horizontal" == o ? h += l + W : d -= l + W
                }
            }
            this._calculMarkMapXY(n, i, "horizontal" == o ? "y" : "x")
        },
        _buildHorizontal: function(e, t, i, n) {
            return this._buildNormal(e, t, i, n, "horizontal")
        },
        _buildVertical: function(e, t, i, n) {
            return this._buildNormal(e, t, i, n, "vertical")
        },
        _buildOther: function(e, t, i, n) {
            for (var o = this.series, r = 0, s = i.length; s > r; r++)
                for (var l = 0, h = i[r].length; h > l; l++) {
                    var d = i[r][l],
                        m = o[d],
                        c = m.xAxisIndex || 0,
                        p = this.component.xAxis.getAxis(c),
                        u = p.getCoord(0),
                        V = m.yAxisIndex || 0,
                        U = this.component.yAxis.getAxis(V),
                        g = U.getCoord(0);
                    n[d] = n[d] || {
                        min0: Number.POSITIVE_INFINITY,
                        min1: Number.POSITIVE_INFINITY,
                        max0: Number.NEGATIVE_INFINITY,
                        max1: Number.NEGATIVE_INFINITY,
                        sum0: 0,
                        sum1: 0,
                        counter0: 0,
                        counter1: 0,
                        average0: 0,
                        average1: 0
                    };
                    for (var y = 0, f = m.data.length; f > y; y++) {
                        var b = m.data[y],
                            _ = null != b ? null != b.value ? b.value : b : "-";
                        if (_ instanceof Array) {
                            var x, k, L = p.getCoord(_[0]),
                                v = U.getCoord(_[1]),
                                W = [b, m],
                                w = this.deepQuery(W, "barWidth") || 10,
                                X = this.deepQuery(W, "barHeight");
                            null != X ? (x = "horizontal", _[0] > 0 ? (w = L - u, L -= w) : w = _[0] < 0 ? u - L : 0, k = this._getBarItem(d, y, _[0], L, v - X / 2, w, X, x)) : (x = "vertical", _[1] > 0 ? X = g - v : _[1] < 0 ? (X = v - g, v -= X) : X = 0, k = this._getBarItem(d, y, _[0], L - w / 2, v, w, X, x)), this.shapeList.push(new a(k)), L = p.getCoord(_[0]), v = U.getCoord(_[1]), n[d].min0 > _[0] && (n[d].min0 = _[0], n[d].minY0 = v, n[d].minX0 = L), n[d].max0 < _[0] && (n[d].max0 = _[0], n[d].maxY0 = v, n[d].maxX0 = L), n[d].sum0 += _[0], n[d].counter0++, n[d].min1 > _[1] && (n[d].min1 = _[1], n[d].minY1 = v, n[d].minX1 = L), n[d].max1 < _[1] && (n[d].max1 = _[1], n[d].maxY1 = v, n[d].maxX1 = L), n[d].sum1 += _[1], n[d].counter1++
                        }
                    }
                }
            this._calculMarkMapXY(n, i, "xy")
        },
        _mapSize: function(e, t, i) {
            var n, a, o = this._findSpecialBarSzie(t, i),
                r = o.barWidthMap,
                s = o.barMaxWidthMap,
                l = o.barMinHeightMap,
                h = o.sBarWidthCounter,
                d = o.sBarWidthTotal,
                m = o.barGap,
                c = o.barCategoryGap,
                p = 1;
            if (t.length != h) {
                if (i) n = e.getGap(), m = 0, a = Math.floor(n / t.length), 0 >= a && (p = Math.floor(t.length / n), a = 1);
                else if (n = "string" == typeof c && c.match(/%$/) ? Math.floor(e.getGap() * (100 - parseFloat(c)) / 100) : e.getGap() - c, "string" == typeof m && m.match(/%$/) ? (m = parseFloat(m) / 100, a = Math.floor((n - d) / ((t.length - 1) * m + t.length - h)), m = Math.floor(a * m)) : (m = parseFloat(m), a = Math.floor((n - d - m * (t.length - 1)) / (t.length - h))), 0 >= a) return this._mapSize(e, t, !0)
            } else if (n = h > 1 ? "string" == typeof c && c.match(/%$/) ? Math.floor(e.getGap() * (100 - parseFloat(c)) / 100) : e.getGap() - c : d, a = 0, m = h > 1 ? Math.floor((n - d) / (h - 1)) : 0, 0 > m) return this._mapSize(e, t, !0);
            return this._recheckBarMaxWidth(t, r, s, l, n, a, m, p)
        },
        _findSpecialBarSzie: function(e, t) {
            for (var i, n, a, o, r = this.series, s = {}, l = {}, h = {}, d = 0, m = 0, c = 0, p = e.length; p > c; c++)
                for (var u = {
                        barWidth: !1,
                        barMaxWidth: !1
                    }, V = 0, U = e[c].length; U > V; V++) {
                    var g = e[c][V],
                        y = r[g];
                    if (!t) {
                        if (u.barWidth) s[g] = i;
                        else if (i = this.query(y, "barWidth"), null != i) {
                            s[g] = i, m += i, d++, u.barWidth = !0;
                            for (var f = 0, b = V; b > f; f++) {
                                var _ = e[c][f];
                                s[_] = i
                            }
                        }
                        if (u.barMaxWidth) l[g] = n;
                        else if (n = this.query(y, "barMaxWidth"), null != n) {
                            l[g] = n, u.barMaxWidth = !0;
                            for (var f = 0, b = V; b > f; f++) {
                                var _ = e[c][f];
                                l[_] = n
                            }
                        }
                    }
                    h[g] = this.query(y, "barMinHeight"), a = null != a ? a : this.query(y, "barGap"), o = null != o ? o : this.query(y, "barCategoryGap")
                }
            return {
                barWidthMap: s,
                barMaxWidthMap: l,
                barMinHeightMap: h,
                sBarWidth: i,
                sBarMaxWidth: n,
                sBarWidthCounter: d,
                sBarWidthTotal: m,
                barGap: a,
                barCategoryGap: o
            }
        },
        _recheckBarMaxWidth: function(e, t, i, n, a, o, r, s) {
            for (var l = 0, h = e.length; h > l; l++)
                for (var d = 0, m = e[l].length; m > d; d++) {
                    var c = e[l][d];
                    i[c] && i[c] < o && (a -= o - i[c])
                }
            return {
                barWidthMap: t,
                barMaxWidthMap: i,
                barMinHeightMap: n,
                gap: a,
                barWidth: o,
                barGap: r,
                interval: s
            }
        },
        _getBarItem: function(e, t, i, n, a, o, s, h) {
            var d, m = this.series,
                c = m[e],
                p = c.data[t],
                u = this._sIndex2ColorMap[e],
                V = [p, c],
                U = this.deepQuery(V, "itemStyle.normal.color") || u,
                g = this.deepQuery(V, "itemStyle.emphasis.color"),
                y = this.deepMerge(V, "itemStyle.normal"),
                f = y.barBorderWidth,
                b = this.deepMerge(V, "itemStyle.emphasis");
            if (d = {
                    zlevel: this._zlevelBase,
                    clickable: this.deepQuery(V, "clickable"),
                    style: {
                        x: n,
                        y: a,
                        width: o,
                        height: s,
                        brushType: "both",
                        color: this.getItemStyleColor(U, e, t, p),
                        radius: y.barBorderRadius,
                        lineWidth: f,
                        strokeColor: y.barBorderColor
                    },
                    
                    highlightStyle: {
                        color: this.getItemStyleColor(g, e, t, p),
                        radius: b.barBorderRadius,
                        lineWidth: b.barBorderWidth,
                        strokeColor: b.barBorderColor
                    },
                    _orient: h
                }, d.highlightStyle.color = d.highlightStyle.color || ("string" == typeof d.style.color ? l.lift(d.style.color, -.3) : d.style.color), f > 0 && d.style.height > f && d.style.width > f ? (d.style.y += f / 2, d.style.height -= f, d.style.x += f / 2, d.style.width -= f) : d.style.brushType = "fill", d.highlightStyle.textColor = d.highlightStyle.color, d = this.addLabel(d, c, p, i, h),"insideLeft" === d.style.textPosition || "insideRight" === d.style.textPosition || "insideTop" === d.style.textPosition || "insideBottom" === d.style.textPosition) {
                var _ = 5;
                
                switch (d.style.textPosition) {
                    case "insideLeft":
                        d.style.textX = d.style.x + _, d.style.textY = d.style.y + d.style.height / 2, d.style.textAlign = "left", d.style.textBaseline = "middle";
                        break;
                    case "insideRight":
                        d.style.textX = d.style.x + d.style.width - _, d.style.textY = d.style.y + d.style.height / 2, d.style.textAlign = "right", d.style.textBaseline = "middle";
                        break;
                    case "insideTop":
                        d.style.textX = d.style.x + d.style.width / 2, d.style.textY = d.style.y + _ / 2, d.style.textAlign = "center", d.style.textBaseline = "top";
                        break;
                    case "insideBottom":
                        d.style.textX = d.style.x + d.style.width / 2, d.style.textY = d.style.y + d.style.height - _ / 2, d.style.textAlign = "center", d.style.textBaseline = "bottom"
                }
                d.style.textPosition = "specific", d.style.textColor = d.style.textColor || "#fff"
            }
            var rotate = this.deepMerge(V, "itemStyle.normal.label.rotate");
            var TextShape = require('zrender/shape/Text');
            var labelShape = {
                    zlevel: this._zlevelBase,
                    z: this._zlevelBase + 1,
                    hoverable: false,
                    style: {
                        text:d.style.text == '0' ? '' : d.style.text,
                        textAlign: 'left',
                        x: d.style.x + d.style.width/2,
                        y: d.style.y - 5,
                        color:d.style.color,
                        textFont:d.style.textFont
                    },
                    rotation :[
                            rotate * Math.PI / 180,
                            d.style.x + d.style.width/2,
                            d.style.y - 5
                        ]
                };
                labelShape = new TextShape(labelShape);
                rotate && this.shapeList.push(labelShape) &&  (d.style.text = '');
            return this.deepQuery([p, c, this.option], "calculable") && (this.setCalculable(d), d.draggable = !0), r.pack(d, m[e], e, m[e].data[t], t, i), d
        },
        getMarkCoord: function(e, t) {
            var i, n, a = this.series[e],
                o = this.xMarkMap[e],
                r = this.component.xAxis.getAxis(a.xAxisIndex),
                s = this.component.yAxis.getAxis(a.yAxisIndex);
            if (!t.type || "max" !== t.type && "min" !== t.type && "average" !== t.type)
                if (o.isHorizontal) {
                    i = "string" == typeof t.xAxis && r.getIndexByName ? r.getIndexByName(t.xAxis) : t.xAxis || 0;
                    var l = o[i];
                    l = null != l ? l : "string" != typeof t.xAxis && r.getCoordByIndex ? r.getCoordByIndex(t.xAxis || 0) : r.getCoord(t.xAxis || 0), n = [l, s.getCoord(t.yAxis || 0)]
                } else {
                    i = "string" == typeof t.yAxis && s.getIndexByName ? s.getIndexByName(t.yAxis) : t.yAxis || 0;
                    var h = o[i];
                    h = null != h ? h : "string" != typeof t.yAxis && s.getCoordByIndex ? s.getCoordByIndex(t.yAxis || 0) : s.getCoord(t.yAxis || 0), n = [r.getCoord(t.xAxis || 0), h]
                } else {
                var d = null != t.valueIndex ? t.valueIndex : null != o.maxX0 ? "1" : "";
                n = [o[t.type + "X" + d], o[t.type + "Y" + d], o[t.type + "Line" + d], o[t.type + d]]
            }
            return n
        },
        refresh: function(e) {
            e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
        },
        addDataAnimation: function(e) {
            for (var t = this.series, i = {}, n = 0, a = e.length; a > n; n++) i[e[n][0]] = e[n];
            for (var o, s, l, h, d, m, c, n = this.shapeList.length - 1; n >= 0; n--)
                if (m = r.get(this.shapeList[n], "seriesIndex"), i[m] && !i[m][3] && "rectangle" === this.shapeList[n].type) {
                    if (c = r.get(this.shapeList[n], "dataIndex"), d = t[m], i[m][2] && c === d.data.length - 1) {
                        this.zr.delShape(this.shapeList[n].id);
                        continue
                    }
                    if (!i[m][2] && 0 === c) {
                        this.zr.delShape(this.shapeList[n].id);
                        continue
                    }
                    "horizontal" === this.shapeList[n]._orient ? (h = this.component.yAxis.getAxis(d.yAxisIndex || 0).getGap(), l = i[m][2] ? -h : h, o = 0) : (s = this.component.xAxis.getAxis(d.xAxisIndex || 0).getGap(), o = i[m][2] ? s : -s, l = 0), this.shapeList[n].position = [0, 0], this.zr.animate(this.shapeList[n].id, "").when(500, {
                        position: [o, l]
                    }).start()
                }
        }
    }, s.inherits(t, n), s.inherits(t, i), e("../chart").define("bar", t), t
});